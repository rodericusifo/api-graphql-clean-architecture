import { IsNotEmpty, IsNumber, Min, IsUUID } from 'class-validator';

export class CreateCartBodyRequest {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  readonly quantity: number;

  @IsNotEmpty()
  @IsUUID()
  readonly productId: string;
}
