import { IsOptional, IsString, IsInt } from "class-validator"


export class UpdateLocationRequestDTO {
    @IsString()
    @IsOptional()
    country?: string
    @IsString()
    @IsOptional()
    city?: string
    @IsString()
    @IsOptional()
    street?: string
    @IsInt()
    @IsOptional()
    number?: number
}