import { ProductEntity } from '@domain/presistence/product/entity/product.entity';

export interface IProductRepositoryPort {
  storeProduct(productEntity: ProductEntity): Promise<ProductEntity>;
  findProductById(productId: string): Promise<ProductEntity>;
}
