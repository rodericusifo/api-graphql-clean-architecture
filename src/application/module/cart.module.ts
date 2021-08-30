import { CartResolver } from './../resolver/cart.resolver';
import { CartController } from './../controller/cart.controller';
import { Module, Provider } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CartRepository } from '@domain/presistence/cart/repository/cart.repository';
import { ProductRepository } from '@domain/presistence/product/repository/product.repository';
import { CreateCartUseCase } from '@domain/use-case/cart/create-cart.use-case';

const presistenceProvider: Provider[] = [
  {
    provide: 'PRODUCT_REPOSITORY',
    inject: [Connection],
    useFactory: (connection) =>
      connection.getCustomRepository(ProductRepository),
  },
  {
    provide: 'CART_REPOSITORY',
    inject: [Connection],
    useFactory: (connection) => connection.getCustomRepository(CartRepository),
  },
];

const useCaseProvider: Provider[] = [
  {
    provide: 'CREATE_CART_USE_CASE',
    inject: ['CART_REPOSITORY', 'PRODUCT_REPOSITORY'],
    useFactory: (cartRepository, productRepository) =>
      new CreateCartUseCase(cartRepository, productRepository),
  },
];

@Module({
  imports: [],
  controllers: [CartController],
  providers: [...presistenceProvider, ...useCaseProvider, CartResolver],
})
export class CartModule {}
