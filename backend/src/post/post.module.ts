import { Module } from '@nestjs/common';
import { PrismaModule } from "../prisma/prisma.module";
import { PostController } from './post.controller';
import {AwsService, ImageService, PostService} from "./post.service";
import { ConfigModule } from "@nestjs/config";
import {UsersModule} from "../users/users.module";
import {APP_GUARD, APP_INTERCEPTOR} from "@nestjs/core";
import {ThrottlerGuard} from "@nestjs/throttler";
import {TimeoutInterceptor} from "@fuse-autotech/nest-timeout";


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
        {
            provide: APP_INTERCEPTOR,
            useValue: new TimeoutInterceptor({defaultTimeout: 10000})
        }
    ],
    exports: [PostService],
})
export class PostModule {}
