/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductEntity } from '@domain/presistence/product/entity/product.entity';
import { CreateProductDTO } from '@domain/use-case/product/dto/create-product.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateProductUseCase } from '@domain/use-case/product/create-product.use-case';

@Resolver()
export class ProductResolver {
  constructor(
    @Inject('CREATE_PRODUCT_USE_CASE')
    private readonly createProductUseCase: CreateProductUseCase,
  ) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => ProductEntity)
  createProduct(@Args('createProductDTO') createProductDTO: CreateProductDTO) {
    return this.createProductUseCase.execute(createProductDTO);
  }
}
