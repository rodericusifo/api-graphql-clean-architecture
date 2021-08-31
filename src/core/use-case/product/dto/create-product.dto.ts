/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Field({ nullable: false })
  public readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { nullable: false })
  public readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { nullable: false })
  public readonly stock: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  public readonly description?: string;

  public constructor(opts?: Partial<CreateProductDTO>) {
    Object.assign(this, opts);
  }
}
