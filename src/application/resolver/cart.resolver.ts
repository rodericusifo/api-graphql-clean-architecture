/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';
import { CreateCartDTO } from '@core/use-case/cart/dto/create-cart.dto';
import { CartTokens } from '@application/token/cart.token';

@Resolver()
export class CartResolver {
  constructor(
    @Inject(CartTokens.CreateCartUseCase)
    private readonly createCartUseCase: CreateCartUseCase,
  ) {}

  @Query()
  sayHello() {
    return 'Hello World!';
  }

  @Mutation()
  createCart(@Args('cart') cart: any) {
    return this.createCartUseCase.execute({ ...cart });
  }
}
