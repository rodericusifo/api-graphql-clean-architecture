/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '@core/presistence/product/entity/product.entity';

@Entity({ name: 'carts' })
export class CartEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'quantity', type: 'int', nullable: false })
  quantity: number;

  @Column({ name: 'amount', type: 'int', nullable: false })
  amount: number;

  @ManyToOne(() => ProductEntity, (product) => product.carts, {
    nullable: false,
  })
  product: ProductEntity;
}
