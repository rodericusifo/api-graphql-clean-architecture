import { CartResolver } from '@application/resolver/cart.resolver';
import { CartController } from '@application/controller/cart.controller';
import { Module, Provider } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CartRepository } from '@core/presistence/cart/repository/cart.repository';
import { ProductRepository } from '@core/presistence/product/repository/product.repository';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';
import { ProductTokens } from '@application/token/product.token';
import { CartTokens } from '@application/token/cart.token';
import { FindAllCartUseCase } from '@core/use-case/cart/find-all-cart.use-case';

const presistenceProvider: Provider[] = [
  {
    provide: ProductTokens.ProductRepository,
    inject: [Connection],
    useFactory: (connection) =>
      connection.getCustomRepository(ProductRepository),
  },
  {
    provide: CartTokens.CartRepository,
    inject: [Connection],
    useFactory: (connection) => connection.getCustomRepository(CartRepository),
  },
];

const useCaseProvider: Provider[] = [
  {
    provide: CartTokens.CreateCartUseCase,
    inject: [CartTokens.CartRepository, ProductTokens.ProductRepository],
    useFactory: (cartRepository, productRepository) =>
      new CreateCartUseCase(cartRepository, productRepository),
  },
  {
    provide: CartTokens.FindAllCartUseCase,
    inject: [CartTokens.CartRepository],
    useFactory: (cartRepository) => new FindAllCartUseCase(cartRepository),
  },
];

@Module({
  imports: [],
  controllers: [CartController],
  providers: [...presistenceProvider, ...useCaseProvider, CartResolver],
})
export class CartModule {}
