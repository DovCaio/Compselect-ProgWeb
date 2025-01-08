import { IsArray, IsOptional } from "class-validator"


export class UpdatePostRequestDTO {

    @IsArray()
    @IsOptional()
    images?: string[]
    @IsOptional()
    @IsArray()
    titles?: string[]
    @IsOptional()
    @IsArray()
    texts?: string[]
    @IsOptional()
    @IsArray()
    links?: string[]
    @IsOptional()
    @IsArray()
    sequenceOfContent?: number[]

}