import { Inject, NotFoundException } from '@nestjs/common';
import { CreateCartDTO } from '@domain/use-case/cart/dto/create-cart.dto';
import { CartDTO } from '@domain/use-case/cart/dto/cart.dto';
import { CartMapper } from '@domain/use-case/cart/mapper/cart.mapper';
import { ICartRepositoryPort } from '@domain/presistence/cart/repository/port/cart-repository.port';
import { IProductRepositoryPort } from '@domain/presistence/product/repository/port/product-repository.port';
import { UseCase } from '../../../libs/contract/use-case';
export class CreateCartUseCase implements UseCase<CreateCartDTO, CartDTO> {
  constructor(
    @Inject('CART_REPOSITORY')
    private readonly cartRepository: ICartRepositoryPort,
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: IProductRepositoryPort,
  ) {}

  async execute(cart?: CreateCartDTO): Promise<CartDTO> {
    const foundProductEntity = await this.productRepository.findProductById(
      cart.productId,
    );
    if (!foundProductEntity) throw new NotFoundException();
    const cartEntity = CartMapper.DTOToEntity({
      quantity: cart.quantity,
      amount: foundProductEntity.price * cart.quantity,
      product: foundProductEntity,
    });
    const savedCartEntity = await this.cartRepository.storeCart(cartEntity);
    return CartMapper.EntityToDTO(savedCartEntity);
  }
}
