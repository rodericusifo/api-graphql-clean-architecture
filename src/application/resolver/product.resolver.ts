/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import { ProductTokens } from '@application/token/product.token';
import { CreateProductBodyRequest } from '@application/controller/request/body/product/create-product-body.request';

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
  createProduct(@Args('body') body: CreateProductBodyRequest) {
    this.createProductUseCase.execute({ ...body });
    return { statusCode: 201, message: 'Product Successfully Created' };
  }
}
