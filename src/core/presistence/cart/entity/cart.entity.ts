/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '@core/presistence/product/entity/product.entity';

@Entity({ name: 'carts' })
export class Cart {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'quantity', type: 'int', nullable: false })
  quantity: number;

  @Column({ name: 'amount', type: 'int', nullable: false })
  amount: number;

  // RELATION
  @ManyToOne(() => Product, (product) => product.carts, {
    nullable: false,
  })
  product: Product;
}
