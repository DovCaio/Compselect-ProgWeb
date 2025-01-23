import { IsString, IsNotEmpty,  IsISO8601, IsArray} from "class-validator";
import { CreateLocationRequestDTO } from "./CreateLocationRequestDTO";
export class CreateEventRequestDTO {
    @IsString()
    @IsNotEmpty()
    title: string; 

    @IsNotEmpty()
    @IsISO8601()
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
    location: CreateLocationRequestDTO;

    
}