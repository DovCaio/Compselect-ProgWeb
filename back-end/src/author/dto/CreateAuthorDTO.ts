import { IsArray, IsNotEmpty, IsString } from "class-validator"


export class CreateAuthorDTO {
    
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string
    
    @IsString()
    @IsNotEmpty()
    image: string

    @IsString()
    @IsNotEmpty()
    bibliography: string

    @IsNotEmpty()
    @IsArray()
    publications: string[]
}