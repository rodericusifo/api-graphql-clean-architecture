import { CartTokens } from '@application/token/cart.token';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';
import { CreateCartDTO } from '@core/use-case/cart/dto/create-cart.dto';

@Controller('carts')
export class CartController {
  constructor(
    @Inject(CartTokens.CreateCartUseCase)
    private readonly createCartUseCase: CreateCartUseCase,
  ) {}

  @Post('create')
  createCart(@Body() cart: any) {
    return this.createCartUseCase.execute({ ...cart });
  }
}
