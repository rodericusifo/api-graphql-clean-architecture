import { ProductTokens } from '@application/token/product.token';
import { FindProductByIdUseCase } from '@core/use-case/product/find-product-by-id.use-case';
import { CreateProductDTO } from '@core/use-case/product/dto/create-product.dto';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(
    @Inject(ProductTokens.CreateProductUseCase)
    private readonly createProductUseCase: CreateProductUseCase,
    @Inject(ProductTokens.FindProductByIdUseCase)
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
  ) {}

  @Post('create')
  createProduct(@Body() product: any) {
    return this.createProductUseCase.execute({ ...product });
  }

  @Get(':productId')
  findProductById(@Param('productId') productId: any) {
    return this.findProductByIdUseCase.execute({ id: productId });
  }
}
