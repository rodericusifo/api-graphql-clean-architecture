import { ProductEntity } from '@core/presistence/product/entity/product.entity';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { plainToClass } from 'class-transformer';

export class ProductMapper {
  static DTOToEntity(productDTO: Partial<ProductDTO>): ProductEntity {
    return plainToClass(ProductEntity, productDTO);
  }

  static EntityToDTO(productEntity: Partial<ProductEntity>): ProductDTO {
    return plainToClass(ProductDTO, productEntity);
  }
}
