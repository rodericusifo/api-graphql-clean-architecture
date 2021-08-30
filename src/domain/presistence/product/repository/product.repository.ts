import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from '@domain/presistence/product/entity/product.entity';
import { IProductRepositoryPort } from '@domain/presistence/product/repository/port/product-repository.port';

@EntityRepository(ProductEntity)
export class ProductRepository
  extends Repository<ProductEntity>
  implements IProductRepositoryPort
{
  findProductById(productId: string): Promise<ProductEntity> {
    return this.findOne({ where: { id: productId } });
  }
  storeProduct(productEntity: ProductEntity): Promise<ProductEntity> {
    return this.save(productEntity);
  }
}
