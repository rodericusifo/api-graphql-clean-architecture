import { IsNotEmpty, IsNumber, Min, IsString } from 'class-validator';

export class CreateCartBodyRequest {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly quantity: number;

  @IsNotEmpty()
  @IsString()
  readonly productId: string;
}
