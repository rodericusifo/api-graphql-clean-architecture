import { CartEntity } from '@domain/presistence/cart/entity/cart.entity';
import { CartDTO } from '@domain/use-case/cart/dto/cart.dto';

export class CartMapper {
  static DTOToEntity(cartDTO: Partial<CartEntity>): CartEntity {
    return new CartEntity(cartDTO);
  }

  static EntityToDTO(cartEntity: CartEntity): CartDTO {
    return new CartDTO(cartEntity);
  }
}
