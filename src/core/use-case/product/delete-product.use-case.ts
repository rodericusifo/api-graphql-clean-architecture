import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { UseCase } from '@libs/contract/use-case';
import { plainToClass } from 'class-transformer';
import { DeleteProductDTO } from '@core/use-case/product/dto/delete-product.dto';

export class DeleteProductUseCase implements UseCase<DeleteProductDTO, void> {
  constructor(private readonly productRepository: IProductRepositoryPort) {}

  async execute(payload?: DeleteProductDTO) {
    const productDTO = plainToClass(ProductDTO, payload);
    this.productRepository.deleteProduct(productDTO);
  }
}
