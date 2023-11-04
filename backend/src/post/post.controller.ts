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
    InternalServerErrorException,
} from '@nestjs/common';
import { IsAuthenticatedGuard } from "../auth/guards/is-authenticated/is-authenticated.guard";
import { AwsService, ImageService, PostService } from "./post.service";
import { FilesInterceptor } from "@nestjs/platform-express";

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService,
        private awsService: AwsService,
        private imageService: ImageService,
    ) {
    }

    @UseGuards(IsAuthenticatedGuard)
    @Post('/')
    async createPost(
        @Body() postData: {title: string, content?:string, authorEmail: string},
    ) {
        const { title, content, authorEmail } = postData;

        return this.postService.createPost({title, content, author: {
            connect: {email: authorEmail}
            }} )

    }

    @Get('/')
    async getPosts() {
        return this.postService.posts({});
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

        for (let i: number = 0; i < post.image.length; i += 1) {
            await this.awsService.imageDelete(post.image[i])

            await this.imageService.deleteImage({"id": post.image[i].id});
        }

        await this.postService.deletePost({"id": post.id});

        return "Post has been successfully deleted";
    }

    @UseGuards(IsAuthenticatedGuard)
    @Post('/:id')
    @UseInterceptors(FilesInterceptor('files'))
    async uploadPostImages(
        @Param ("id") id: string,
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        const post = await this.postService.post({"id": Number(id)})

        console.log(post)

        if (!post) {
            throw new InternalServerErrorException();
        }

        console.log(files)

        for (let i: number = 0; i < files.length; i += 1) {
            const name: string = files[i].originalname

            const url: string = await this.awsService.imageUpload(files[i].buffer, name);

            await this.imageService.createImage({name, url, Post: {connect: {id: post.id}}});
        }
    }
}
