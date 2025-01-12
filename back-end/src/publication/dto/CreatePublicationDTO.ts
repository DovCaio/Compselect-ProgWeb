import { IsArray, IsNotEmpty, IsString } from "class-validator"


export class CreatePublicationDTO {
    @IsString()
    @IsNotEmpty()
    title: string
    @IsString()
    @IsNotEmpty()
    image: string
    @IsArray()
    @IsNotEmpty()
    authors: number[]
    @IsString()
    @IsNotEmpty()
    type: string
}