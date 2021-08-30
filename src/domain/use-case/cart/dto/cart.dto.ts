import { IsInstance, IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ProductEntity } from '@domain/presistence/product/entity/product.entity';

export class CartDTO {
  @IsNotEmpty()
  @IsString()
  public readonly id: string;

  @IsNotEmpty()
  @IsNumber()
  public readonly quantity: number;

  @IsNotEmpty()
  @IsNumber()
  public readonly amount: number;

  @IsNotEmpty()
  @IsInstance(ProductEntity)
  public readonly product: ProductEntity;

  public constructor(opts?: Partial<CartDTO>) {
    Object.assign(this, opts);
  }
}
