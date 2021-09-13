/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateProductDTO } from '@core/use-case/product/dto/create-product.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import { ProductTokens } from '@application/token/product.token';

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
  createProduct(@Args('product') product: any) {
    return this.createProductUseCase.execute({ ...product });
  }
}
