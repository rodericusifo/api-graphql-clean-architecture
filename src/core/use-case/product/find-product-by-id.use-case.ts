import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { UseCase } from '@libs/contract/use-case';
import { NotFoundException } from '@nestjs/common';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { FindProductByIdDTO } from '@core/use-case/product/dto/find-product-by-id.dto';

export class FindProductByIdUseCase
  implements UseCase<FindProductByIdDTO, ProductDTO>
{
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async execute(payload?: FindProductByIdDTO): Promise<ProductDTO> {
    const foundProductDTO = await this.productRepository.findProductById(
      payload.id,
    );
    if (!foundProductDTO)
      throw new NotFoundException(
        `Product with ID: ${payload.id} was not found`,
      );
    return foundProductDTO;
  }
}
