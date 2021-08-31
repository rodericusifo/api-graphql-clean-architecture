/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateCartDTO {
  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { nullable: false })
  public readonly quantity: number;

  @IsNotEmpty()
  @IsString()
  @Field({ nullable: false })
  public readonly productId: string;

  public constructor(opts?: Partial<CreateCartDTO>) {
    Object.assign(this, opts);
  }
}
