/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '@domain/presistence/product/entity/product.entity';

@Entity({ name: 'carts' })
@ObjectType()
export class CartEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  @Field(() => ID)
  id: string;

  @Column({ name: 'quantity', type: 'int', nullable: false })
  @Field(() => Int, { nullable: false })
  quantity: number;

  @Column({ name: 'amount', type: 'int', nullable: false })
  @Field(() => Int, { nullable: false })
  amount: number;

  @ManyToOne(() => ProductEntity, (product) => product.carts, {
    nullable: false,
  })
  @Field(() => ProductEntity, { nullable: false })
  product: ProductEntity;

  constructor(cartDto: Partial<CartEntity>) {
    Object.assign(this, cartDto);
  }
}
