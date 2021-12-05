import { IsNotEmpty, IsUUID } from 'class-validator';

export class EditProductParamRequest {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;
}
