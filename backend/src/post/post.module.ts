import { Module } from '@nestjs/common';
import { PrismaModule } from "../prisma/prisma.module";
import { PostController } from './post.controller';
import {AwsService, ImageService, PostService} from "./post.service";
import { ConfigModule } from "@nestjs/config";
import {UsersModule} from "../users/users.module";
import {APP_GUARD} from "@nestjs/core";
import {ThrottlerGuard} from "@nestjs/throttler";


@Module({
    imports: [PrismaModule, ConfigModule.forRoot(), UsersModule],
    controllers: [PostController],
    providers: [
        PostService,
        AwsService,
        ImageService,
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
    exports: [PostService],
})
export class PostModule {}
