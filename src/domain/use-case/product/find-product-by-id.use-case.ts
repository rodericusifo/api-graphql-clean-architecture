import { ProductDTO } from '@domain/use-case/product/dto/product.dto';
import { UseCase } from '../../../libs/contract/use-case';
import { Inject, NotFoundException } from '@nestjs/common';
import { ProductMapper } from '@domain/use-case/product/mapper/product.mapper';
import { IProductRepositoryPort } from '@domain/presistence/product/repository/port/product-repository.port';

export class FindProductByIdUseCase implements UseCase<string, ProductDTO> {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: IProductRepositoryPort,
  ) {}

  async execute(productId?: string): Promise<ProductDTO> {
    const foundProductEntity = await this.productRepository.findProductById(
      productId,
    );
    if (!foundProductEntity) throw new NotFoundException();
    return ProductMapper.EntityToDTO(foundProductEntity);
  }
}
