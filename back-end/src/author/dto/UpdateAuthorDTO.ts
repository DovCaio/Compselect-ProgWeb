import { IsArray, IsOptional, IsString } from "class-validator";


export class UpdateAuthorDTO {
    @IsString()
    @IsOptional()
    firstName?: string;
    @IsString()
    @IsOptional()
    lastName?: string;
    @IsString()
    @IsOptional()
    image?: string;
    @IsString()
    @IsOptional()
    bibliography?: string;
    @IsOptional()
    @IsArray()
    publications?: string[];
}
