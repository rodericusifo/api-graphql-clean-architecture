import { CreateCartDTO } from '@core/use-case/cart/dto/create-cart.dto';
import { CartDTO } from '@core/use-case/cart/dto/cart.dto';
import { ICartRepositoryPort } from '@core/presistence/cart/repository/port/cart-repository.port';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { UseCase } from '@libs/contract/use-case';
import { plainToClass } from 'class-transformer';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';

export class CreateCartUseCase implements UseCase<CreateCartDTO, void> {
  constructor(
    private readonly cartRepository: ICartRepositoryPort,
    private readonly productRepository: IProductRepositoryPort,
  ) {}

  async execute(payload?: CreateCartDTO) {
    const productDTO = plainToClass(ProductDTO, { id: payload.productId });
    const foundProductDTO = await this.productRepository.findProductById(
      productDTO,
    );
    const cartDTO = plainToClass(CartDTO, {
      quantity: payload.quantity,
      productDTO: foundProductDTO,
    });
    cartDTO.calculateAmount();
    this.cartRepository.storeCart(cartDTO);
  }
}
