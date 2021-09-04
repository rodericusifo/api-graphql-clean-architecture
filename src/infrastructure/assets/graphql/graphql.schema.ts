
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCartInput {
    quantity?: Nullable<number>;
    productId?: Nullable<string>;
}

export class CreateProductInput {
    name?: Nullable<string>;
    price?: Nullable<number>;
    stock?: Nullable<number>;
    description?: Nullable<string>;
}

export abstract class IMutation {
    abstract createCart(createCartInput?: Nullable<CreateCartInput>): Nullable<Cart> | Promise<Nullable<Cart>>;

    abstract createProduct(createProductInput?: Nullable<CreateProductInput>): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IQuery {
    abstract sayHello(): Nullable<string> | Promise<Nullable<string>>;
}

export class Cart {
    id?: Nullable<string>;
    amount?: Nullable<number>;
    quantity?: Nullable<number>;
    product?: Nullable<Product>;
}

export class Product {
    id?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    stock?: Nullable<number>;
    description?: Nullable<string>;
}

type Nullable<T> = T | null;
