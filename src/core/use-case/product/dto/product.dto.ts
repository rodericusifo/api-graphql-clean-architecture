import { IsNumber, IsString, IsOptional, Min } from 'class-validator';

export class ProductDTO {
  @IsOptional()
  @IsString()
  public readonly id: string;

  @IsOptional()
  @IsString()
  public readonly name: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  public readonly price: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  public readonly stock: number;

  @IsOptional()
  @IsString()
  public readonly description: string;
}
