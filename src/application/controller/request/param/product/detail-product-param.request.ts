import { IsNotEmpty, IsUUID } from 'class-validator';

export class DetailProductParamRequest {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;
}
