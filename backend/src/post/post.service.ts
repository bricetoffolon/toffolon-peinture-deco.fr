import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Image, Post, Prisma} from "@prisma/client";
import * as S3 from "@aws-sdk/client-s3";
import {DeleteObjectsCommand, ListObjectsV2Command, PutObjectCommand} from "@aws-sdk/client-s3";
import * as sharp from 'sharp';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {}

    async post(
        postWhereUniqueInput: Prisma.PostWhereUniqueInput,
    ): Promise<any | null> {
        return this.prisma.post.findUnique({
            where: postWhereUniqueInput,
            include: {
                images: true,
            }
        })
    }

    async createPost(data: Prisma.PostCreateInput): Promise<Post> {
        return this.prisma.post.create({
            data,
        });
    }

    async posts(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PostWhereUniqueInput;
        where?: Prisma.PostWhereInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Post[]> {
        const { skip, take, cursor, where, orderBy } = params;

        return this.prisma.post.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                images: true
            }
        });
    }

    async updatePost(params: {
        where: Prisma.PostWhereUniqueInput;
        data: Prisma.PostUpdateInput
    }): Promise<Post> {
        const { data, where } = params;

        return this.prisma.post.update({
            where,
            data,
        });
    }

    async deletePost(
        where: Prisma.PostWhereUniqueInput
    ): Promise<Post> {
        return this.prisma.post.delete({
            where,
        })
    }
}

@Injectable()
export class AwsService {
    private readonly awsKeyId: string;
    private readonly awsKeySecret: string;
    private readonly awsRegion: string;
    private readonly awsBucketPosts: string;
    private readonly s3: S3.S3Client;

    constructor(
        private readonly configService: ConfigService,
    ) {
            this.awsKeyId = configService.get<string>('AWS_ACCESS_KEY_ID');
            this.awsKeySecret = configService.get<string>('AWS_ACCESS_KEY_SECRET');
            this.awsRegion = configService.get<string>('AWS_REGION');
            this.awsBucketPosts = configService.get<string>('AWS_BUCKET_POSTS');

            this.s3 = new S3.S3Client({
                region: this.awsRegion,
                credentials: {
                    accessKeyId: this.awsKeyId,
                    secretAccessKey: this.awsKeySecret,
                }
            })
    }

    async imageUpload(postId: number, fileBuff: Buffer, filename: string): Promise<string> {
        const key = `Post-${postId}/${filename}`;

        const params = {
            Bucket: this.awsBucketPosts,
            Key: key,
            Body: fileBuff,
        };

        try {
            await this.s3.send(new PutObjectCommand(params));
            return `https://${this.awsBucketPosts}.s3.${this.awsRegion}.amazonaws.com/${key}`;
        } catch (err) {
            console.error(err);
            return "Error"
        }
    }

    async deleteImagesOfPost(postId: number) {
        const list_params = {
            Bucket: this.awsBucketPosts,
            Prefix: `Post-${postId}/`
        };

        try {
            const list = await this.s3.send(new ListObjectsV2Command(list_params));
            if (list.KeyCount) {
                const deleteCommand = new DeleteObjectsCommand({
                    Bucket: this.awsBucketPosts,
                    Delete: {
                        Objects: list.Contents.map((item) => ({ Key: item.Key })),
                        Quiet: false,
                    },
                });
                let deleted = await this.s3.send(deleteCommand);
                if (deleted.Errors) {
                    deleted.Errors.map((error) => console.log(`${error.Key} could not be deleted - ${error.Code}`));
                }
                return `${deleted.Deleted.length} files deleted.`;
            }
        } catch {
            return "Error";
        }
    }
}

@Injectable()
export class ImageService {
    constructor(private prisma: PrismaService) {}

    async image(
        imageWhereUniqueInput: Prisma.ImageWhereUniqueInput,
    ): Promise<Image | null> {
        return this.prisma.image.findUnique({
            where: imageWhereUniqueInput
        })
    }

    async createImage(data: Prisma.ImageCreateInput): Promise<Image> {
        return this.prisma.image.create({
            data,
        })
    }

    async images(params:{
        skip?: number;
        take?: number;
        cursor?: Prisma.ImageWhereUniqueInput;
        where?: Prisma.ImageWhereInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }) : Promise<Image[]> {
        const { skip, take, cursor, where, orderBy } = params;

        return this.prisma.image.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async mergeCopyrightToImage(mainImageBuffer: Buffer): Promise<Buffer> {
        try {
            return await sharp(mainImageBuffer)
                .withMetadata()
                .composite([
                    {
                        input: './assets/images/toffolon-copyright.png',
                        gravity: 'southeast'
                    },
                ])
                .toBuffer();
        } catch (err) {
            console.error(err);
        }
    }

    async deleteImage(
        where: Prisma.ImageWhereUniqueInput
    ): Promise<Image> {
        return this.prisma.image.delete({
            where,
        })
    }
}
