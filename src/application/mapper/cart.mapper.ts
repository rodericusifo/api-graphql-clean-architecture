import { CartEntity } from '@core/presistence/cart/entity/cart.entity';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { plainToClass } from 'class-transformer';

export class CartMapper {
  static DTOToEntity(cartDTO: Partial<CartDTO>): CartEntity {
    return plainToClass(CartEntity, cartDTO);
  }

  static EntityToDTO(cartEntity: Partial<CartEntity>): CartDTO {
    return plainToClass(CartDTO, cartEntity);
  }
}
