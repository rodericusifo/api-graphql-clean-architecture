import { Product } from '@core/presistence/product/entity/product.entity';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { plainToClass } from 'class-transformer';

export class ProductMapper {
  static DTOToEntity(productDTO: Partial<ProductDTO>): Product {
    const product = plainToClass(Product, productDTO);
    return product;
  }

  static EntityToDTO(product: Partial<Product>): ProductDTO {
    const productDTO = plainToClass(ProductDTO, product);
    // productDTO.carts = product.carts.map((cart) => {
    //   const cartDTO = plainToClass(CartDTO, cart);
    //   cartDTO.product = plainToClass(ProductDTO, cart.product);
    //   return cartDTO;
    // });
    return productDTO;
  }
}
