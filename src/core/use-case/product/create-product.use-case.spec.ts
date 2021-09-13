import { ProductTokens } from '@application/token/product.token';
import { ProductRepository } from '@core/presistence/product/repository/product.repository';
import { CreateProductUseCase } from '@core/use-case/product/create-product.use-case';
import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('CreateProductUseCase', () => {
  let createProductUseCase: CreateProductUseCase;
  let productRepository: ProductRepository;

  beforeEach(async () => {
    const presistenceProvider: Provider[] = [
      {
        provide: ProductTokens.ProductRepository,
        useFactory: jest.fn(() => ({
          storeProduct: jest.fn(),
        })),
      },
    ];

    const useCaseProvider: Provider[] = [
      {
        provide: ProductTokens.CreateProductUseCase,
        inject: [ProductTokens.ProductRepository],
        useFactory: (productRepository) =>
          new CreateProductUseCase(productRepository),
      },
    ];

    const module: TestingModule = await Test.createTestingModule({
      providers: [...useCaseProvider, ...presistenceProvider],
    }).compile();

    createProductUseCase = module.get<CreateProductUseCase>(
      ProductTokens.CreateProductUseCase,
    );
    productRepository = module.get<ProductRepository>(
      ProductTokens.ProductRepository,
    );
  });

  it('should be defined', () => {
    expect(createProductUseCase).toBeDefined();
  });

  describe('.execute()', () => {
    it('should be success create product', async () => {
      const inputProduct = {
        name: 'Laptop',
        description: `it's laptop`,
        price: 5000000,
        stock: 20,
      };
      const storedProduct = {
        id: '2102o32013021321i0120',
        ...inputProduct,
      };
      const expectedProduct = {
        ...storedProduct,
      };
      jest
        .spyOn(productRepository, 'storeProduct')
        .mockImplementation(() => Promise.resolve(storedProduct));
      expect(await createProductUseCase.execute(inputProduct)).toEqual(
        expectedProduct,
      );
    });
  });
});
