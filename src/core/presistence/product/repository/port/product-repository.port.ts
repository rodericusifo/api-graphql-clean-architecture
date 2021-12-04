import { ProductDTO } from '@core/use-case/product/dto/product.dto';

export interface IProductRepositoryPort {
  storeProduct(productDTO: Partial<ProductDTO>);
  findProductById(productId: string): Promise<ProductDTO>;
}
