import { Exclude } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsOptional,
  Min,
  IsDateString,
  IsUUID,
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
