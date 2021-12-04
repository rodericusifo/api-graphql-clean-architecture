import {
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateProductBodyRequest {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly stock: number;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
