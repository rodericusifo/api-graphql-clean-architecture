import { CartTokens } from '@application/token/cart.token';
import { CartRepository } from '@core/presistence/cart/repository/cart.repository';
import { ProductRepository } from '@core/presistence/product/repository/product.repository';
import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateCartUseCase } from '@core/use-case/cart/create-cart.use-case';
import { ProductTokens } from '@application/token/product.token';

describe('FindProductByIdUseCase', () => {
  let createCartUseCase: CreateCartUseCase;
  let productRepository: ProductRepository;
  let cartRepository: CartRepository;

  beforeEach(async () => {
    const presistenceProvider: Provider[] = [
      {
        provide: ProductTokens.ProductRepository,
        useFactory: jest.fn(() => ({
          storeProduct: jest.fn(),
          findProductById: jest.fn(),
        })),
      },
      {
        provide: CartTokens.CartRepository,
        useFactory: jest.fn(() => ({
          storeCart: jest.fn(),
        })),
      },
    ];

    const useCaseProvider: Provider[] = [
      {
        provide: CartTokens.CreateCartUseCase,
        inject: [CartTokens.CartRepository, ProductTokens.ProductRepository],
        useFactory: (cartRepository, productRepository) =>
          new CreateCartUseCase(cartRepository, productRepository),
      },
    ];

    const module: TestingModule = await Test.createTestingModule({
      providers: [...useCaseProvider, ...presistenceProvider],
    }).compile();

    createCartUseCase = module.get<CreateCartUseCase>(
      CartTokens.CreateCartUseCase,
    );
    productRepository = module.get<ProductRepository>(
      ProductTokens.ProductRepository,
    );
    cartRepository = module.get<CartRepository>(CartTokens.CartRepository);
  });

  it('should be defined', () => {
    expect(createCartUseCase).toBeDefined();
  });

  describe('.execute()', () => {
    it('should be success create cart', async () => {
      const inputCart = {
        quantity: 2,
        productId: '123jnsauqhe2b23uwugd',
      };
      const foundProduct = {
        id: '123jnsauqhe2b23uwugd',
        name: 'Laptop 1',
        description: '',
        price: 2000000,
        stock: 2,
      };
      const storedCart = {
        id: 'sja23w34duiwehwqheqhwehehie',
        amount: inputCart.quantity * foundProduct.price,
        quantity: inputCart.quantity,
        product: foundProduct,
      };
      const expectedCart = {
        ...storedCart,
      };
      jest
        .spyOn(productRepository, 'findProductById')
        .mockImplementation(() => Promise.resolve(foundProduct));
      jest
        .spyOn(cartRepository, 'storeCart')
        .mockImplementation(() => Promise.resolve(storedCart));
      expect(await createCartUseCase.execute(inputCart)).toEqual(expectedCart);
    });
  });
});
