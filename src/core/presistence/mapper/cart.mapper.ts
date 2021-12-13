import { Cart } from '@core/presistence/cart/entity/cart.entity';
import { Product } from '@core/presistence/product/entity/product.entity';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { plainToClass } from 'class-transformer';

export class CartMapper {
  static DTOToEntity(cartDTO: Partial<CartDTO>): Cart {
    const cart = plainToClass(Cart, cartDTO);
    cart.product = plainToClass(Product, cartDTO.product);
    return cart;
  }

  static EntityToDTO(cart: Partial<Cart>): CartDTO {
    const cartDTO = plainToClass(CartDTO, cart);
    cartDTO.product = plainToClass(ProductDTO, cart.product);
    return cartDTO;
  }
}
