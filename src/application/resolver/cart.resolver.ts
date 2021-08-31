/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CartEntity } from '@core/presistence/cart/entity/cart.entity';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';
import { CreateCartDTO } from '@core/use-case/cart/dto/create-cart.dto';

@Resolver()
export class CartResolver {
  constructor(
    @Inject('CREATE_CART_USE_CASE')
    private readonly createCartUseCase: CreateCartUseCase,
  ) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => CartEntity)
  createCart(@Args('createCartDTO') createCartDTO: CreateCartDTO) {
    return this.createCartUseCase.execute(createCartDTO);
  }
}
