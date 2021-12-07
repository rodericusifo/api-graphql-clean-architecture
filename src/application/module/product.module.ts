import { FindAllProductUseCase } from '@core/use-case/product/find-all-product.use-case';
import { Connection } from 'typeorm';
import { Module, Provider } from '@nestjs/common';
import { ProductResolver } from '@application/resolver/product.resolver';
import { FindProductByIdUseCase } from '@core/use-case/product/find-product-by-id.use-case';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import { ProductRepository } from '@core/presistence/product/repository/product.repository';
import { ProductController } from '@application/controller/product.controller';
import { ProductTokens } from '@application/token/product.token';
import { UpdateProductUseCase } from '@core/use-case/product/update-product.use-case';
import { DeleteProductUseCase } from '@core/use-case/product/delete-product.use-case';

const presistenceProvider: Provider[] = [
  {
    provide: ProductTokens.ProductRepository,
    inject: [Connection],
    useFactory: (connection) =>
      connection.getCustomRepository(ProductRepository),
  },
];

const useCaseProvider: Provider[] = [
  {
    provide: ProductTokens.CreateProductUseCase,
    inject: [ProductTokens.ProductRepository],
    useFactory: (productRepository) =>
      new CreateProductUseCase(productRepository),
  },
  {
    provide: ProductTokens.FindProductByIdUseCase,
    inject: [ProductTokens.ProductRepository],
    useFactory: (productRepository) =>
      new FindProductByIdUseCase(productRepository),
  },
  {
    provide: ProductTokens.FindAllProductUseCase,
    inject: [ProductTokens.ProductRepository],
    useFactory: (productRepository) =>
      new FindAllProductUseCase(productRepository),
  },
  {
    provide: ProductTokens.UpdateProductUseCase,
    inject: [ProductTokens.ProductRepository],
    useFactory: (productRepository) =>
      new UpdateProductUseCase(productRepository),
  },
  {
    provide: ProductTokens.DeleteProductUseCase,
    inject: [ProductTokens.ProductRepository],
    useFactory: (productRepository) =>
      new DeleteProductUseCase(productRepository),
  },
];

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [...presistenceProvider, ...useCaseProvider, ProductResolver],
  exports: [ProductTokens.ProductRepository],
})
export class ProductModule {}
