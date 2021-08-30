import { CartRepository } from '@domain/presistence/cart/repository/cart.repository';
import { ProductRepository } from '@domain/presistence/product/repository/product.repository';
import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateCartUseCase } from '@domain/use-case/cart/create-cart.use-case';

describe('FindProductByIdUseCase', () => {
  let createCartUseCase: CreateCartUseCase;
  let productRepository: ProductRepository;
  let cartRepository: CartRepository;

  beforeEach(async () => {
    const presistenceProvider: Provider[] = [
      {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: jest.fn(() => ({
          storeProduct: jest.fn(),
          findProductById: jest.fn(),
        })),
      },
      {
        provide: 'CART_REPOSITORY',
        useFactory: jest.fn(() => ({
          storeCart: jest.fn(),
        })),
      },
    ];

    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateCartUseCase, ...presistenceProvider],
    }).compile();

    createCartUseCase = module.get<CreateCartUseCase>(CreateCartUseCase);
    productRepository = module.get<ProductRepository>('PRODUCT_REPOSITORY');
    cartRepository = module.get<CartRepository>('CART_REPOSITORY');
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
