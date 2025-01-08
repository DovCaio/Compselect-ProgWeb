import { IsNotEmpty, IsString, IsNumber, IsInt } from "class-validator";

export class CreateLocationRequestDTO {

    @IsString()
    @IsNotEmpty()
    country: string;
    
    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    @IsInt()
    number: number;

}