import { CreateCartBodyRequest } from '@application/controller/request/body/cart/create-cart-body.request';
import { CartTokens } from '@application/token/cart.token';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';

@Controller('carts')
export class CartController {
  constructor(
    @Inject(CartTokens.CreateCartUseCase)
    private readonly createCartUseCase: CreateCartUseCase,
  ) {}

  @Post('create')
  async createCart(@Body() body: CreateCartBodyRequest) {
    await this.createCartUseCase.execute({ ...body });
    return { message: 'Cart Successfully Created' };
  }
}
