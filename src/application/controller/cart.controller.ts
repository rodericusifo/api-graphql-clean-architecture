import { CreateCartBodyRequest } from '@application/controller/request/body/cart/create-cart-body.request';
import { CartTokens } from '@application/token/cart.token';
import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';
import { ListCartQueryRequest } from '@application/controller/request/query/cart/list-cart-query.request';
import { FindAllCartUseCase } from '@core/use-case/cart/find-all-cart.use-case';

@Controller('carts')
export class CartController {
  constructor(
    @Inject(CartTokens.CreateCartUseCase)
    private readonly createCartUseCase: CreateCartUseCase,
    @Inject(CartTokens.FindAllCartUseCase)
    private readonly findAllCartUseCase: FindAllCartUseCase,
  ) {}

  @Post('create')
  async createCart(@Body() body: CreateCartBodyRequest) {
    await this.createCartUseCase.execute({ ...body });
    return { message: 'Cart Successfully Created' };
  }

  @Get('list')
  async listCart(@Query() query: ListCartQueryRequest) {
    const foundAllCartDTO = await this.findAllCartUseCase.execute({
      ...query,
    });

    return {
      message: 'All Cart Found',
      result: foundAllCartDTO,
      meta: {
        page: query.page || 1,
        count: foundAllCartDTO.length,
      },
    };
  }
}
