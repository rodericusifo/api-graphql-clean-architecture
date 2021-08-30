/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CartEntity } from '@domain/presistence/cart/entity/cart.entity';
import { CreateCartUseCase } from '@domain/use-case/cart/create-cart.use-case';
import { CreateCartDTO } from '@domain/use-case/cart/dto/create-cart.dto';

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
