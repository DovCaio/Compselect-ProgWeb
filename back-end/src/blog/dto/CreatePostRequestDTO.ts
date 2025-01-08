import { IsArray, IsNotEmpty } from "class-validator"


export class CreatePostRequestDTO {

    @IsArray()
    @IsNotEmpty()
    images: string[]
    @IsNotEmpty()
    @IsArray()
    titles: string[]
    @IsNotEmpty()
    @IsArray()
    texts: string[]
    @IsNotEmpty()
    @IsArray()
    links: string[]
    @IsNotEmpty()
    @IsArray()
    sequenceOfContent: number[]

}