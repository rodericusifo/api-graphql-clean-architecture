/* eslint-disable @typescript-eslint/no-unused-vars */
import { Cart } from '@core/presistence/cart/entity/cart.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'name', type: 'text', nullable: false, unique: true })
  name: string;

  @Column({ name: 'price', type: 'int', nullable: false })
  price: number;

  @Column({ name: 'stock', type: 'int', nullable: false })
  stock: number;

  @Column({ name: 'description', type: 'text', nullable: true, default: null })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  /* IGNORE: Only Support Relation */
  @OneToMany(() => Cart, (carts) => carts.product)
  carts?: Cart[];
}
