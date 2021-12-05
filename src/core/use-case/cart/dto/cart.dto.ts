import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { Exclude } from 'class-transformer';
import {
  IsInstance,
  IsNumber,
  IsOptional,
  Min,
  IsDateString,
  IsUUID,
} from 'class-validator';

export class CartDTO {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @IsOptional()
  @IsInstance(ProductDTO)
  product?: ProductDTO;

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

  calculateAmount() {
    this.amount = this.quantity * this.product.price;
  }
}
