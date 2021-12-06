
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCartBodyRequest {
    quantity?: Nullable<number>;
    productId?: Nullable<string>;
}

export class CreateProductBodyRequest {
    name?: Nullable<string>;
    price?: Nullable<number>;
    stock?: Nullable<number>;
    description?: Nullable<string>;
}

export abstract class IMutation {
    abstract createCart(body?: Nullable<CreateCartBodyRequest>): Nullable<CreateCartResponse> | Promise<Nullable<CreateCartResponse>>;

    abstract createProduct(body?: Nullable<CreateProductBodyRequest>): Nullable<CreateProductResponse> | Promise<Nullable<CreateProductResponse>>;
}

export abstract class IQuery {
    abstract sayHello(): Nullable<string> | Promise<Nullable<string>>;
}

export class CreateCartResponse {
    statusCode?: Nullable<number>;
    message?: Nullable<string>;
    status?: Nullable<string>;
}

export class CreateProductResponse {
    statusCode?: Nullable<number>;
    message?: Nullable<string>;
    status?: Nullable<string>;
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
