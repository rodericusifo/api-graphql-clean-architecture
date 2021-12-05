import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteProductDTO {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;
}
