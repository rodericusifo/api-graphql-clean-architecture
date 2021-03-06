import { IsNotEmpty, IsUUID } from 'class-validator';

export class FindProductByIdDTO {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;
}
