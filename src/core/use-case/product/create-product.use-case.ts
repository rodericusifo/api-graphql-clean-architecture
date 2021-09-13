import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { CreateProductDTO } from '@core/use-case/product/dto/create-product.dto';
import { ProductMapper } from '@application/mapper/product.mapper';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { UseCase } from '@libs/contract/use-case';

export class CreateProductUseCase
  implements UseCase<CreateProductDTO, ProductDTO>
{
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async execute(product?: CreateProductDTO): Promise<ProductDTO> {
    const productEntity = ProductMapper.DTOToEntity(product);
    const savedProductEntity = await this.productRepository.storeProduct(
      productEntity,
    );
    return ProductMapper.EntityToDTO(savedProductEntity);
  }
}
