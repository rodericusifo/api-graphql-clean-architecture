import { Product } from '@core/presistence/product/entity/product.entity';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { plainToClass } from 'class-transformer';

export class ProductMapper {
  static DTOToEntity(productDTO: Partial<ProductDTO>): Product {
    return plainToClass(Product, productDTO);
  }

  static EntityToDTO(product: Partial<Product>): ProductDTO {
    return plainToClass(ProductDTO, product);
  }
}
