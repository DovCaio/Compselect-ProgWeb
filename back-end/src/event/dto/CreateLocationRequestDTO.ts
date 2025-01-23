import { IsNotEmpty, IsString,   IsNumberString } from "class-validator";
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
    @IsNumberString()
    number: number;

}