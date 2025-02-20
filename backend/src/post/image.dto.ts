import {IsNumber, IsString} from "class-validator";

export class ImageResponseDto {
    constructor(id, url) {
        this.id = id;
        this.url = url;
    }

    @IsNumber()
    id: number;

    @IsString()
    url: string;
}

