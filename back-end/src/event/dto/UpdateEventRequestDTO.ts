import { IsOptional, IsString, IsDateString, IsArray } from "class-validator";
import { UpdateLocationRequestDTO } from "./UpdateLocationRequestDTO";
export class UpdateEventRequestDTO {
    @IsString()
    @IsOptional()
    title?: string; 

    @IsOptional()
    @IsDateString()
    dateEvent?: Date;

    @IsOptional()
    @IsString()
    time?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsArray()
    @IsOptional()
    target?: string[]

    @IsArray()
    @IsOptional()
    activities?: string[]

    @IsOptional()
    image?: string

    @IsOptional()
    location?: UpdateLocationRequestDTO
}