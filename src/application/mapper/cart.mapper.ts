import { Cart } from '@core/presistence/cart/entity/cart.entity';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { plainToClass } from 'class-transformer';
import { ProductMapper } from '@application/mapper/product.mapper';

export class CartMapper {
  static DTOToEntity(cartDTO: Partial<CartDTO>): Cart {
    const cart = plainToClass(Cart, cartDTO);
    cart.product = ProductMapper.DTOToEntity(cartDTO.product);
    return cart;
  }

  static EntityToDTO(cart: Partial<Cart>): CartDTO {
    const cartDTO = plainToClass(CartDTO, cart);
    cartDTO.product = ProductMapper.EntityToDTO(cart.product);
    return cartDTO;
  }
}
