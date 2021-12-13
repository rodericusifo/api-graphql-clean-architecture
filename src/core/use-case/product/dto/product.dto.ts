import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { Exclude } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsInstance,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class ProductDTO {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock?: number;

  @IsOptional()
  @IsArray()
  @IsInstance(CartDTO, { each: true })
  carts?: CartDTO[];

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  createdAt?: Date;

  @IsOptional()
  @IsDateString()
  updatedAt?: Date;

  @IsOptional()
  @IsDateString()
  @Exclude()
  deletedAt?: Date;
}
