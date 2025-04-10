import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {}

//para el gateway no hacen falta las validaciones del dto

//El PartialType hace que se tomen todas las propiedades de createProductDto y sean opcionales aqui 