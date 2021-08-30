import { ProductDTO } from '@domain/use-case/product/dto/product.dto';
import { CreateProductDTO } from '@domain/use-case/product/dto/create-product.dto';
import { Inject } from '@nestjs/common';
import { ProductMapper } from '@domain/use-case/product/mapper/product.mapper';
import { IProductRepositoryPort } from '@domain/presistence/product/repository/port/product-repository.port';
import { UseCase } from '../../../libs/contract/use-case';

export class CreateProductUseCase
  implements UseCase<CreateProductDTO, ProductDTO>
{
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: IProductRepositoryPort,
  ) {}

  async execute(product?: CreateProductDTO): Promise<ProductDTO> {
    const productEntity = ProductMapper.DTOToEntity(product);
    const savedProductEntity = await this.productRepository.storeProduct(
      productEntity,
    );
    return ProductMapper.EntityToDTO(savedProductEntity);
  }
}
