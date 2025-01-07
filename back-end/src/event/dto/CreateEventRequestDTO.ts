import { IsString, IsNotEmpty,  IsDateString, IsArray} from "class-validator";

export class CreateEventRequestDTO {
    @IsString()
    @IsNotEmpty()
    title: string; 

    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @IsString()
    time: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsArray()
    @IsNotEmpty()
    target: string[]

    @IsArray()
    @IsNotEmpty()
    activities: string[]

    @IsNotEmpty()
    image: Uint8Array
}