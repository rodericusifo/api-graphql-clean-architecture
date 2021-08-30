import { Connection } from 'typeorm';
import { Module, Provider } from '@nestjs/common';
import { ProductResolver } from '@application/resolver/product.resolver';
import { FindProductByIdUseCase } from '@domain/use-case/product/find-product-by-id.use-case';
import { CreateProductUseCase } from '@domain/use-case/product/create-product.use-case';
import { ProductRepository } from '@domain/presistence/product/repository/product.repository';
import { ProductController } from '@application/controller/product.controller';

const presistenceProvider: Provider[] = [
  {
    provide: 'PRODUCT_REPOSITORY',
    inject: [Connection],
    useFactory: (connection) =>
      connection.getCustomRepository(ProductRepository),
  },
];

const useCaseProvider: Provider[] = [
  {
    provide: 'CREATE_PRODUCT_USE_CASE',
    inject: ['PRODUCT_REPOSITORY'],
    useFactory: (productRepository) =>
      new CreateProductUseCase(productRepository),
  },
  {
    provide: 'FIND_PRODUCT_BY_ID_USE_CASE',
    inject: ['PRODUCT_REPOSITORY'],
    useFactory: (productRepository) =>
      new FindProductByIdUseCase(productRepository),
  },
];

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [...presistenceProvider, ...useCaseProvider, ProductResolver],
})
export class ProductModule {}
