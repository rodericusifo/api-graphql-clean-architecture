import { SortingType } from '@core/presistence/interface/query.interface';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsNumber, Min } from 'class-validator';

export class FindAllCartDTO {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly page?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  readonly limit?: number;

  @IsOptional()
  @IsString()
  readonly sortingBy?: string;

  @IsOptional()
  @IsEnum(SortingType)
  readonly sortingType?: SortingType;
}
