/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateProductDTO } from '@core/use-case/product/dto/create-product.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';

@Resolver()
export class ProductResolver {
  constructor(
    @Inject('CREATE_PRODUCT_USE_CASE')
    private readonly createProductUseCase: CreateProductUseCase,
  ) {}

  @Query()
  sayHello() {
    return 'Hello World!';
  }

  @Mutation()
  createProduct(
    @Args('createProductInput') createProductDTO: CreateProductDTO,
  ) {
    return this.createProductUseCase.execute(createProductDTO);
  }
}
