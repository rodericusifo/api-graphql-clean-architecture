import { DetailProductParamRequest } from '@application/controller/request/param/product/detail-product-param.request';
import { ProductTokens } from '@application/token/product.token';
import { FindProductByIdUseCase } from '@core/use-case/product/find-product-by-id.use-case';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateProductBodyRequest } from '@application/controller/request/body/product/create-product-body.request';

@Controller('products')
export class ProductController {
  constructor(
    @Inject(ProductTokens.CreateProductUseCase)
    private readonly createProductUseCase: CreateProductUseCase,
    @Inject(ProductTokens.FindProductByIdUseCase)
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
  ) {}

  @Post('create')
  async createProduct(@Body() body: CreateProductBodyRequest) {
    await this.createProductUseCase.execute({ ...body });
    return { message: 'Product Successfully Created' };
  }

  @Get(':id/detail')
  async detailProduct(@Param() param: DetailProductParamRequest) {
    return {
      message: 'Product Found',
      result: await this.findProductByIdUseCase.execute({ ...param }),
    };
  }
}
