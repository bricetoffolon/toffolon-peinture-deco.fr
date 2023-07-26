import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { Prisma, Post, Image } from "@prisma/client";
import * as AWS from 'aws-sdk';
import { ConfigService } from "@nestjs/config";
@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {}

    async post(
        postWhereUniqueInput: Prisma.PostWhereUniqueInput,
    ): Promise<any | null> {
        return this.prisma.post.findUnique({
            where: postWhereUniqueInput,
            include: {
                image: true,
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
                image: true
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
    private readonly awsBucket: string;
    private readonly s3: AWS.S3;

    constructor(
        private readonly configService: ConfigService,
    ) {
            this.awsKeyId = configService.get<string>('AWS_ACCESS_KEY_ID');
            this.awsKeySecret = configService.get<string>('AWS_ACCESS_KEY_SECRET');
            this.awsRegion = configService.get<string>('AWS_REGION');
            this.awsBucket = configService.get<string>('AWS_BUCKET');

            this.s3 = new AWS.S3({
                accessKeyId: this.awsKeyId,
                secretAccessKey: this.awsKeySecret,
                region: this.awsRegion,
            })
    }

    async imageUpload(fileBuff: Buffer, filename: string): Promise<string> {
        const uploadResp: AWS.S3.ManagedUpload.SendData = await this.s3.upload({
            Bucket: this.awsBucket,
            Key: filename,
            Body: fileBuff,
        }).promise();

        return uploadResp.Location
    }

    async imageDelete(imageName): Promise<AWS.Request<AWS.S3.DeleteObjectOutput, AWS.AWSError>> {
        return this.s3.deleteObject({
            Bucket: this.awsBucket,
            Key: imageName,
        });
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

    async deleteImage(
        where: Prisma.ImageWhereUniqueInput
    ): Promise<Image> {
        return this.prisma.image.delete({
            where,
        })
    }
}
