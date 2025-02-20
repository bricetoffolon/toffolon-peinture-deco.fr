import {IsNotEmpty, IsNumber, IsString, ValidateNested} from "class-validator";
import {ImageResponseDto} from "./image.dto";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}

export class PostResponseDto {
    constructor(id, title, content, image: ImageResponseDto[]) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
    }

    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    content: string;

    @ValidateNested({each: true})
    image: ImageResponseDto[];
}

export class PostsResponseDto {
    @ValidateNested({each: true})
    posts: PostResponseDto[];

    constructor(posts: PostResponseDto[]) {
        this.posts = posts;
    }
}