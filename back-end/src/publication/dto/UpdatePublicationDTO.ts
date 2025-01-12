import { IsArray, IsOptional, IsString } from "class-validator"


export class UpdatePublicationDTO {
    @IsString()
    @IsOptional()
    title?: string
    
    @IsString()
    @IsOptional()
    description?: string
    @IsString()
    @IsOptional()
    image?: string
    @IsArray()
    @IsOptional()
    authors?: number[]
    @IsString()
    @IsOptional()
    type?: string
}