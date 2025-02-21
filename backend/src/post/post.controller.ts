import {
    Controller,
    UseGuards,
    Body,
    Post,
    UseInterceptors,
    UploadedFiles,
    Param,
    Get,
    Delete,
    NotFoundException,
    InternalServerErrorException, Request,
} from '@nestjs/common';
import { IsAuthenticatedGuard } from "../auth/guards/is-authenticated/is-authenticated.guard";
import { AwsService, ImageService, PostService } from "./post.service";
import { FilesInterceptor } from "@nestjs/platform-express";
import {CreatePostDto, PostResponseDto, PostsResponseDto} from "./post.dto";
import {UsersService} from "../users/users.service";
import {ImageResponseDto} from "./image.dto";
import {Prisma} from "@prisma/client";
import {Timeout} from "@fuse-autotech/nest-timeout";


@Controller('post')
export class PostController {
    constructor(
        private postService: PostService,
        private awsService: AwsService,
        private imageService: ImageService,
        private readonly usersService: UsersService,
    ) {
    }

    @UseGuards(IsAuthenticatedGuard)
    @Post('/')
    async createPost(
        @Request() req: any,
        @Body() CreatePostDto: CreatePostDto,
    ) {
        const user = await this.usersService.user({
            "email": req.session.passport.user,
        });

        const post = await this.postService.createPost({title: CreatePostDto.title, content: CreatePostDto.content, author: {
            connect: {id: user.id}
            }} )

        return new PostResponseDto(post.id, post.title, post.content, []);
    }

    @Get('/')
    async getPosts() {
        type PostsWithImages = Prisma.PromiseReturnType<typeof this.postService.post>
        const posts: PostsWithImages = await this.postService.posts({});
        const postDtos = posts.map(post => new PostResponseDto(post.id, post.title, post.content, post.images.map(img => new ImageResponseDto(img.id, img.url))));
        return new PostsResponseDto(postDtos);
    }

    @UseGuards(IsAuthenticatedGuard)
    @Delete('/:id')
    async delPost(
        @Param ("id") id: string,
    ): Promise<String> {
        const post = await this.postService.post({"id": Number(id)})

        if (!post) {
            throw new NotFoundException();
        }

        await this.awsService.deleteImagesOfPost(post.id);

        if (post.images) {
            for (let i: number = 0; i < post.images.length; i += 1) {
                await this.imageService.deleteImage({"id": post.images[i].id});
            }
        }

        await this.postService.deletePost({"id": post.id});

        return "Post has been successfully deleted";
    }

    @UseGuards(IsAuthenticatedGuard)
    @Post('/:id')
    @UseInterceptors(FilesInterceptor('files'))
    @Timeout(30000)
    async uploadPostImages(
        @Param ("id") id: string,
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        const post = await this.postService.post({"id": Number(id)})

        if (!post) {
            throw new InternalServerErrorException();
        }

        for (let i: number = 0; i < files.length; i += 1) {
            const name: string = files[i].originalname

            const imageBuffer = await this.imageService.mergeCopyrightToImage(files[i].buffer);

            const url: string = await this.awsService.imageUpload(post.id, imageBuffer, name);

            await this.imageService.createImage({name, url, post: {connect: {id: post.id}}});
        }
    }
}
