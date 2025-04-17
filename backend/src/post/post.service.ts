import * as sharp from 'sharp';
import * as path from 'path';
import * as os from 'os';
import { exec } from "child_process";
import { readFile, unlink, writeFile } from "fs/promises";
import * as S3 from "@aws-sdk/client-s3";
import { Injectable } from '@nestjs/common';
import { Image, Post, Prisma } from "@prisma/client";
import { DeleteObjectsCommand, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";

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

    async compressImageToWebP(filename: string, image: Buffer, quality: number, metadata: string): Promise<{webPBuffer: Buffer, outputName: string}> {
        try {
            const ext = path.extname(filename);
            const basename = path.basename(filename, ext);
            const inputPath = path.join(os.tmpdir(), `${filename}`);
            const outputName = `${basename}.webp`
            const outputPath = path.join(os.tmpdir(), outputName);

            if (quality < 0 || quality > 100 ) {
            }

            await writeFile(inputPath, image);


            await new Promise<void>((resolve, reject) => {
                exec(`cwebp -q ${quality} -metadata ${metadata} ${inputPath} -o ${outputPath}`, (error) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve();
                });
            });

            const webPBuffer = await readFile(outputPath);

            await unlink(inputPath);
            await unlink(outputPath);

            return {
                webPBuffer,
                outputName
            };
        } catch (err) {
            console.log(err);
        }
    }

    async addWatermarkPattern(
        inputBuffer: Buffer,
        watermarkPath: string,
        options: {
            angle?: number; // Angle in degrees
            scale?: number; // Scale in percentage (100 = original size)
        } = {},
    ): Promise<Buffer> {
        // Set default options
        const angle = options.angle ?? -45;
        const scale = options.scale ?? 100;

        // Get image dimensions
        const imageMetadata = await sharp(inputBuffer).metadata();
        const { width, height } = imageMetadata;

        if (!width || !height) {
            throw new Error('Could not determine image dimensions');
        }

        const superior_value = width > height ? width : height;

        // Load and prepare the watermark
        const watermarkBuffer = await readFile(watermarkPath);
        const { width: watermarkWidth, height: watermarkHeight } = await sharp(watermarkBuffer).metadata();

        // Resize watermark based on scale
        const watermarkImage = await sharp(watermarkBuffer)
            .resize({
                width: Math.round((watermarkWidth * scale) / 100),
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 },
            })
            .toBuffer();

        // Calculate how many times to repeat the watermark to fill the pattern
        const repeatX = Math.ceil(superior_value / watermarkWidth) + 1;
        const repeatY = Math.ceil(superior_value / watermarkHeight) + 1;

        // Create a pattern that's large enough to cover the image when rotated
        // We need to make it larger to account for rotation
        const patternSize = watermarkWidth * repeatX;

        // Create a larger canvas for the pattern with the watermark repeated
        const patternBuilder = sharp({
            create: {
                width: patternSize,
                height: patternSize,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 },
            },
        });

        // Create composite operations for repeating the watermark
        const compositeOperations = [];

        for (let y = -1; y < repeatY; y++) {
            for (let x = -1; x < repeatX; x++) {
                compositeOperations.push({
                    input: watermarkImage,
                    left: x * watermarkWidth,
                    top: y * watermarkHeight,
                });
            }
        }

        // Create the repeating pattern
        const patternBuffer = await patternBuilder
            .composite(compositeOperations)
            .png()
            .toBuffer();

        // Rotate the pattern by the specified angle
        const rotatedPatternBuffer = await sharp(patternBuffer)
            .rotate(angle, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .extract({
                left: patternSize / 2,
                top: patternSize / 2,
                width: patternSize / 2,
                height: patternSize / 2,
            })
            .png()
            .toBuffer();

        // Apply the watermark to the original image with the specified opacity
        const resizedImage = await sharp(rotatedPatternBuffer)
            .resize({
                width,
                height,
            })
        .toBuffer();

        return await sharp(inputBuffer)
            .composite([
                {
                    input: resizedImage,
                    blend: 'over',
                    gravity: 'center',
                    tile: true,
                },
            ])
            .toBuffer();
    }

    async deleteImage(
        where: Prisma.ImageWhereUniqueInput
    ): Promise<Image> {
        return this.prisma.image.delete({
            where,
        })
    }
}
