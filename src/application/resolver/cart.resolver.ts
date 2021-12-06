/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';
import { CartTokens } from '@application/token/cart.token';
import { CreateCartBodyRequest } from '@application/controller/request/body/cart/create-cart-body.request';

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
  createCart(@Args('body') body: CreateCartBodyRequest) {
    this.createCartUseCase.execute({ ...body });
    return { statusCode: 201, message: 'Cart Successfully Created' };
  }
}
