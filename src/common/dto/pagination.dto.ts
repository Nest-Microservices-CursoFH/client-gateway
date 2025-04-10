import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationDto {

    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    page?: number = 1;   //si no se pone va a ser 1 


    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    limit?:  number = 10; //si no se utiliza va a ser 10
}