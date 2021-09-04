import {
  IsInstance,
  IsString,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';
import { ProductEntity } from '@core/presistence/product/entity/product.entity';

export class CartDTO {
  @IsOptional()
  @IsString()
  public readonly id: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  public readonly quantity: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  public readonly amount: number;

  @IsOptional()
  @IsInstance(ProductEntity)
  public readonly product: ProductEntity;
}
