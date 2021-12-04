import { IsNotEmpty, IsNumber, Min, IsUUID } from 'class-validator';

export class CreateCartBodyRequest {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  readonly quantity: number;

  @IsNotEmpty()
  @IsUUID()
  readonly productId: string;
}
