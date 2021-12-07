import { ListProductQueryRequest } from '@application/controller/request/query/product/list-product-query.request';
import { DetailProductParamRequest } from '@application/controller/request/param/product/detail-product-param.request';
import { ProductTokens } from '@application/token/product.token';
import { FindProductByIdUseCase } from '@core/use-case/product/find-product-by-id.use-case';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductBodyRequest } from '@application/controller/request/body/product/create-product-body.request';
import { FindAllProductUseCase } from '@core/use-case/product/find-all-product.use-case';
import { UpdateProductUseCase } from '@core/use-case/product/update-product.use-case';
import { EditProductBodyRequest } from '@application/controller/request/body/product/edit-product-body.request';
import { EditProductParamRequest } from '@application/controller/request/param/product/edit-product-param.request';
import { DeleteProductUseCase } from '@core/use-case/product/delete-product.use-case';
import { DeleteProductParamRequest } from '@application/controller/request/param/product/delete-product-param.request';

@Controller('products')
export class ProductController {
  constructor(
    @Inject(ProductTokens.CreateProductUseCase)
    private readonly createProductUseCase: CreateProductUseCase,
    @Inject(ProductTokens.FindProductByIdUseCase)
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
    @Inject(ProductTokens.FindAllProductUseCase)
    private readonly findAllProductUseCase: FindAllProductUseCase,
    @Inject(ProductTokens.UpdateProductUseCase)
    private readonly updateProductUseCase: UpdateProductUseCase,
    @Inject(ProductTokens.DeleteProductUseCase)
    private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post('create')
  async createProduct(@Body() body: CreateProductBodyRequest) {
    await this.createProductUseCase.execute({ ...body });
    return { message: 'Product Successfully Created' };
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

  @Get(':id/detail')
  async detailProduct(@Param() param: DetailProductParamRequest) {
    return {
      message: 'Product Found',
      result: await this.findProductByIdUseCase.execute({ ...param }),
    };
  }

  @Put(':id/edit')
  async editProduct(
    @Param() param: EditProductParamRequest,
    @Body() body: EditProductBodyRequest,
  ) {
    await this.updateProductUseCase.execute({ ...param, ...body });
    return { message: 'Product Successfully Updated' };
  }

  @Delete(':id/delete')
  async deleteProduct(@Param() param: DeleteProductParamRequest) {
    await this.deleteProductUseCase.execute({ ...param });
    return { message: 'Product Successfully Deleted' };
  }
}
