import { ProductEntity } from '@core/presistence/product/entity/product.entity';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';

export class ProductMapper {
  static DTOToEntity(productDTO: Partial<ProductEntity>): ProductEntity {
    return new ProductEntity(productDTO);
  }

  static EntityToDTO(productEntity: ProductEntity): ProductDTO {
    return new ProductDTO(productEntity);
  }
}
