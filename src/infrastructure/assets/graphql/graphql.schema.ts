
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCartRequest {
    quantity?: Nullable<number>;
    productId?: Nullable<string>;
}

export class CreateProductRequest {
    name?: Nullable<string>;
    price?: Nullable<number>;
    stock?: Nullable<number>;
    description?: Nullable<string>;
}

export abstract class IMutation {
    abstract createCart(request?: Nullable<CreateCartRequest>): Nullable<CreateCartResponse> | Promise<Nullable<CreateCartResponse>>;

    abstract createProduct(request?: Nullable<CreateProductRequest>): Nullable<CreateProductResponse> | Promise<Nullable<CreateProductResponse>>;
}

export abstract class IQuery {
    abstract sayHello(): Nullable<string> | Promise<Nullable<string>>;
}

export class CreateCartResponse {
    statusCode?: Nullable<number>;
    message?: Nullable<string>;
}

export class CreateProductResponse {
    statusCode?: Nullable<number>;
    message?: Nullable<string>;
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
