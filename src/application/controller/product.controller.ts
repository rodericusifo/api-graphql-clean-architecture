import { FindProductByIdUseCase } from '@core/use-case/product/find-product-by-id.use-case';
import { CreateProductDTO } from '@core/use-case/product/dto/create-product.dto';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(
    @Inject('CREATE_PRODUCT_USE_CASE')
    private readonly createProductUseCase: CreateProductUseCase,
    @Inject('FIND_PRODUCT_BY_ID_USE_CASE')
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
  ) {}

  @Post('create')
  createProduct(@Body() product: CreateProductDTO) {
    return this.createProductUseCase.execute(product);
  }

  @Get(':id')
  findProductById(@Param('id') productId: string) {
    return this.findProductByIdUseCase.execute(productId);
  }
}
