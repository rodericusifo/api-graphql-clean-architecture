import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { CreateProductDTO } from '@core/use-case/product/dto/create-product.dto';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { UseCase } from '@libs/contract/use-case';
import { plainToClass } from 'class-transformer';

export class CreateProductUseCase implements UseCase<CreateProductDTO, void> {
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async execute(payload?: CreateProductDTO) {
    const productDTO = plainToClass(ProductDTO, payload);
    await this.productRepository.storeProduct(productDTO);
  }
}
