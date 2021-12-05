import {
  IQuery,
  SortingType,
} from '@core/presistence/interface/query.interface';
import { ProductMapper } from '@application/mapper/product.mapper';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '@core/presistence/product/entity/product.entity';
import { IProductRepositoryPort } from '@core/presistence/product/repository/port/product-repository.port';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Product)
export class ProductRepository
  extends Repository<Product>
  implements IProductRepositoryPort
{
  async findProductById(productDTO: Partial<ProductDTO>): Promise<ProductDTO> {
    const product = await this.findOne(productDTO.id);
    if (!product) {
      throw new NotFoundException(
        `Product with ID: ${productDTO.id} was not found`,
      );
    }
    return ProductMapper.EntityToDTO(product);
  }
  async storeProduct(productDTO: Partial<ProductDTO>) {
    const product = ProductMapper.DTOToEntity(productDTO);
    await this.save(product);
  }
  async findAllProduct(query: IQuery): Promise<ProductDTO[]> {
    const products = await this.find({
      skip: (query.page - 1) * query.limit || 0,
      take: query.limit || 10,
      order: {
        name:
          query.sortingBy === 'name' &&
          query.sortingType === SortingType.Descending
            ? 'DESC'
            : 'ASC',
      },
    });
    if (products.length === 0) {
      throw new NotFoundException(`All Product was not found`);
    }
    return products.map(ProductMapper.EntityToDTO);
  }
}
