import { ListProductQueryRequest } from '@application/controller/request/query/product/list-product-query.request';
import { DetailProductParamRequest } from '@application/controller/request/param/product/detail-product-param.request';
import { ProductTokens } from '@application/token/product.token';
import { FindProductByIdUseCase } from '@core/use-case/product/find-product-by-id.use-case';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProductBodyRequest } from '@application/controller/request/body/product/create-product-body.request';
import { FindAllProductUseCase } from '@core/use-case/product/find-all-product.use-case';

@Controller('products')
export class ProductController {
  constructor(
    @Inject(ProductTokens.CreateProductUseCase)
    private readonly createProductUseCase: CreateProductUseCase,
    @Inject(ProductTokens.FindProductByIdUseCase)
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
    @Inject(ProductTokens.FindAllProductUseCase)
    private readonly findAllProductUseCase: FindAllProductUseCase,
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

  @Get('list')
  async listProduct(@Query() query: ListProductQueryRequest) {
    const foundAllProductDTO = await this.findAllProductUseCase.execute({
      ...query,
    });

    return {
      message: 'All Product Found',
      result: foundAllProductDTO,
      meta: {
        page: query.page || 1,
        count: foundAllProductDTO.length,
      },
    };
  }
}
