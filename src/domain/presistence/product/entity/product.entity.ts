/* eslint-disable @typescript-eslint/no-unused-vars */
import { CartEntity } from '@domain/presistence/cart/entity/cart.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'products' })
@ObjectType()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  @Field(() => ID)
  id: string;

  @Column({ name: 'name', type: 'text', nullable: false })
  @Field({ nullable: false })
  name: string;

  @Column({ name: 'price', type: 'int', nullable: false })
  @Field(() => Int, { nullable: false })
  price: number;

  @Column({ name: 'stock', type: 'int', nullable: false })
  @Field(() => Int, { nullable: false })
  stock: number;

  @Column({ name: 'description', type: 'text', nullable: true, default: '' })
  @Field({ nullable: true, defaultValue: '' })
  description?: string;

  @OneToMany(() => CartEntity, (cart) => cart.product)
  @Field(() => [CartEntity])
  carts?: CartEntity[];

  constructor(productDto: Partial<ProductEntity>) {
    Object.assign(this, productDto);
  }
}
