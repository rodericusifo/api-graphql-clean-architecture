import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateCartDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  productId: string;
}
