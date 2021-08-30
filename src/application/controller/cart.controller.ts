import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateCartUseCase } from '@domain/use-case/cart/create-cart.use-case';
import { CreateCartDTO } from '@domain/use-case/cart/dto/create-cart.dto';

@Controller('carts')
export class CartController {
  constructor(
    @Inject('CREATE_CART_USE_CASE')
    private readonly createCartUseCase: CreateCartUseCase,
  ) {}

  @Post('create')
  createCart(@Body() cart: CreateCartDTO) {
    return this.createCartUseCase.execute(cart);
  }
}
