/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import { ProductTokens } from '@application/token/product.token';
import { CreateProductRequest } from '@application/resolver/request/product/create-product.request';

@Resolver()
export class ProductResolver {
  constructor(
    @Inject(ProductTokens.CreateProductUseCase)
    private readonly createProductUseCase: CreateProductUseCase,
  ) {}

  @Query()
  sayHello() {
    return 'Hello World!';
  }

  @Mutation()
  createProduct(@Args('request') request: CreateProductRequest) {
    this.createProductUseCase.execute({ ...request });
    return { statusCode: 201, message: 'Product Successfully Created' };
  }
}
