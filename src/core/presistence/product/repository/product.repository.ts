import { ProductMapper } from '@application/mapper/product.mapper';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '@core/presistence/product/entity/product.entity';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';

@EntityRepository(Product)
export class ProductRepository
  extends Repository<Product>
  implements IProductRepositoryPort
{
  async findProductById(productId: string): Promise<ProductDTO> {
    const product = await this.findOne(productId);
    return ProductMapper.EntityToDTO(product);
  }
  async storeProduct(productDTO: Partial<ProductDTO>) {
    const product = ProductMapper.DTOToEntity(productDTO);
    await this.save(product);
  }
}
