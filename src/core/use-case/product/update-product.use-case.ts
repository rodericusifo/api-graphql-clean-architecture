import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { UseCase } from '@libs/contract/use-case';
import { plainToClass } from 'class-transformer';
import { UpdateProductDTO } from '@core/use-case/product/dto/update-product.dto';

export class UpdateProductUseCase implements UseCase<UpdateProductDTO, void> {
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async execute(payload?: UpdateProductDTO) {
    const productDTO = plainToClass(ProductDTO, payload);
    this.productRepository.updateProduct(productDTO);
  }
}
