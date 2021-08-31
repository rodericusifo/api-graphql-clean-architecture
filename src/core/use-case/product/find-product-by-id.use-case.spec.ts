import { FindProductByIdUseCase } from '@core/use-case/product/find-product-by-id.use-case';
import { ProductRepository } from '@core/presistence/product/repository/product.repository';
import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

describe('FindProductByIdUseCase', () => {
  let findProductByIdUseCase: FindProductByIdUseCase;
  let productRepository: ProductRepository;

  beforeEach(async () => {
    const presistenceProvider: Provider[] = [
      {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: jest.fn(() => ({
          storeProduct: jest.fn(),
          findProductById: jest.fn(),
        })),
      },
    ];

    const module: TestingModule = await Test.createTestingModule({
      providers: [FindProductByIdUseCase, ...presistenceProvider],
    }).compile();

    findProductByIdUseCase = module.get<FindProductByIdUseCase>(
      FindProductByIdUseCase,
    );
    productRepository = module.get<ProductRepository>('PRODUCT_REPOSITORY');
  });

  it('should be defined', () => {
    expect(findProductByIdUseCase).toBeDefined();
  });

  describe('.execute()', () => {
    it('should be success find product by id', async () => {
      const inputProduct = '2102o32013021321i0120';
      const foundProduct = {
        id: '2102o32013021321i0120',
        name: 'Laptop 1',
        description: '',
        price: 2000000,
        stock: 2,
      };
      const expectedProduct = {
        ...foundProduct,
      };
      jest
        .spyOn(productRepository, 'findProductById')
        .mockImplementation(() => Promise.resolve(foundProduct));
      expect(await findProductByIdUseCase.execute(inputProduct)).toEqual(
        expectedProduct,
      );
    });
  });
});
