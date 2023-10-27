import { Module } from '@nestjs/common';
import { PrismaModule } from "../prisma/prisma.module";
import { PostController } from './post.controller';
import {AwsService, ImageService, PostService} from "./post.service";
import { ConfigModule } from "@nestjs/config";
import {UsersModule} from "../users/users.module";


@Module({
    imports: [PrismaModule, ConfigModule.forRoot(), UsersModule],
    controllers: [PostController],
    providers: [PostService, AwsService, ImageService],
    exports: [PostService],
})
export class PostModule {}
