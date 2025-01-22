import { IsString, IsNotEmpty,  IsDateString, IsArray} from "class-validator";
import { CreateLocationRequestDTO } from "./CreateLocationRequestDTO";
export class CreateEventRequestDTO {
    @IsString()
    @IsNotEmpty()
    title: string; 

    @IsNotEmpty()
    @IsDateString()
    dateEvent: Date;

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
    image: Express.Multer.File

    @IsNotEmpty()
    location: CreateLocationRequestDTO;

    
}