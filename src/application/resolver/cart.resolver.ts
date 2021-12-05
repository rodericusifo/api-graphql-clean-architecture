/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';
import { CartTokens } from '@application/token/cart.token';
import { CreateCartRequest } from './request/cart/create-cart.request';

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
  createCart(@Args('request') request: CreateCartRequest) {
    this.createCartUseCase.execute({ ...request });
    return { statusCode: 201, message: 'Cart Successfully Created' };
  }
}
