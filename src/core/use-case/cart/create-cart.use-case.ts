import { NotFoundException } from '@nestjs/common';
import { CreateCartDTO } from '@core/use-case/cart/dto/create-cart.dto';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { CartMapper } from '@application/mapper/cart.mapper';
import { ICartRepositoryPort } from '@core/presistence/cart/repository/port/cart-repository.port';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { UseCase } from '@libs/contract/use-case';
import { plainToClass } from 'class-transformer';

export class CreateCartUseCase implements UseCase<CreateCartDTO, void> {
  constructor(
    private readonly cartRepository: ICartRepositoryPort,
    private readonly productRepository: IProductRepositoryPort,
  ) {}

  async execute(payload?: CreateCartDTO) {
    const foundProductDTO = await this.productRepository.findProductById(
      payload.productId,
    );
    if (!foundProductDTO)
      throw new NotFoundException(
        `Product with ID: ${payload.productId} was not found`,
      );
    const cartDTO = plainToClass(CartDTO, {
      quantity: payload.quantity,
      productDTO: foundProductDTO,
    });
    cartDTO.calculateAmount();
    await this.cartRepository.storeCart(cartDTO);
  }
}
