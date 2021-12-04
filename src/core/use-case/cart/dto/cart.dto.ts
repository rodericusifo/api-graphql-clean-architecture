import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import {
  IsInstance,
  IsString,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

export class CartDTO {
  @IsOptional()
  @IsString()
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
  productDTO?: ProductDTO;

  calculateAmount() {
    this.amount = this.quantity * this.productDTO.price;
  }
}
