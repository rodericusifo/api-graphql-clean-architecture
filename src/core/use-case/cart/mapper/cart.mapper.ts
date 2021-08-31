import { CartEntity } from '@core/presistence/cart/entity/cart.entity';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';

export class CartMapper {
  static DTOToEntity(cartDTO: Partial<CartEntity>): CartEntity {
    return new CartEntity(cartDTO);
  }

  static EntityToDTO(cartEntity: CartEntity): CartDTO {
    return new CartDTO(cartEntity);
  }
}
