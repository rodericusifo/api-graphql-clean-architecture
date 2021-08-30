import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty()
  @IsString()
  public readonly id: string;

  @IsNotEmpty()
  @IsString()
  public readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  public readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  public readonly stock: number;

  @IsNotEmpty()
  @IsString()
  public readonly description: string;

  public constructor(opts?: Partial<ProductDTO>) {
    Object.assign(this, opts);
  }
}
