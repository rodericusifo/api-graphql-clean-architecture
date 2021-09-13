import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class FindProductByIdDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}
