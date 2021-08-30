import { ProductRepository } from '@domain//presistence/product/repository/product.repository';
import { CreateProductUseCase } from '@domain/use-case/product/create-product.use-case';
import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('CreateProductUseCase', () => {
  let createProductUseCase: CreateProductUseCase;
  let productRepository: ProductRepository;

  beforeEach(async () => {
    const presistenceProvider: Provider[] = [
      {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: jest.fn(() => ({
          storeProduct: jest.fn(),
        })),
      },
    ];

    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateProductUseCase, ...presistenceProvider],
    }).compile();

    createProductUseCase =
      module.get<CreateProductUseCase>(CreateProductUseCase);
    productRepository = module.get<ProductRepository>('PRODUCT_REPOSITORY');
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
