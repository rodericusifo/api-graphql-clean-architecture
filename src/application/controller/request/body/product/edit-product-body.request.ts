import { IsString, IsNumber, Min, IsOptional } from 'class-validator';

export class EditProductBodyRequest {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly stock?: number;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
