import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteProductParamRequest {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;
}
