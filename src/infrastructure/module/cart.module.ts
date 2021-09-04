import { CartResolver } from '@application/resolver/cart.resolver';
import { CartController } from '@application/controller/cart.controller';
import { Module, Provider } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CartRepository } from '@core/presistence/cart/repository/cart.repository';
import { ProductRepository } from '@core/presistence/product/repository/product.repository';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';

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
