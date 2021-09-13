import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { UseCase } from '@libs/contract/use-case';
import { NotFoundException } from '@nestjs/common';
import { ProductMapper } from '@application/mapper/product.mapper';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { FindProductByIdDTO } from '@core/use-case/product/dto/find-product-by-id.dto';

export class FindProductByIdUseCase
  implements UseCase<FindProductByIdDTO, ProductDTO>
{
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async execute(product?: FindProductByIdDTO): Promise<ProductDTO> {
    const foundProductEntity = await this.productRepository.findProductById(
      product.id,
    );
    if (!foundProductEntity) throw new NotFoundException();
    return ProductMapper.EntityToDTO(foundProductEntity);
  }
}
