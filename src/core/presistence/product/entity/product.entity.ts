/* eslint-disable @typescript-eslint/no-unused-vars */
import { CartEntity } from '@core/presistence/cart/entity/cart.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'name', type: 'text', nullable: false, unique: true })
  name: string;

  @Column({ name: 'price', type: 'int', nullable: false })
  price: number;

  @Column({ name: 'stock', type: 'int', nullable: false })
  stock: number;

  @Column({ name: 'description', type: 'text', nullable: true, default: '' })
  description?: string;

  @OneToMany(() => CartEntity, (cart) => cart.product)
  carts?: CartEntity[];
}
