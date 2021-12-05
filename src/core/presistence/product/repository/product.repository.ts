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
  async storeProduct(productDTO: Partial<ProductDTO>) {
    const product = ProductMapper.DTOToEntity(productDTO);
    await this.save(product);
  }
  async findAllProduct(query: IQuery): Promise<ProductDTO[]> {
    const foundProducts = await this.find({
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
    return foundProducts.map(ProductMapper.EntityToDTO);
  }
  async findProductById(productDTO: Partial<ProductDTO>): Promise<ProductDTO> {
    const product = ProductMapper.DTOToEntity(productDTO);
    const foundProduct = await this.findOne({ id: product.id });
    if (!foundProduct) {
      throw new NotFoundException(
        `Product with ID: ${product.id} was not found`,
      );
    }
    return ProductMapper.EntityToDTO(foundProduct);
  }
  async updateProduct(productDTO: Partial<ProductDTO>) {
    const product = ProductMapper.DTOToEntity(productDTO);
    const updatedProduct = await this.update({ id: product.id }, product);
    if (!updatedProduct.affected) {
      throw new NotFoundException(
        `Product with ID: ${product.id} was not found`,
      );
    }
  }
  async deleteProduct(productDTO: Partial<ProductDTO>) {
    const product = ProductMapper.DTOToEntity(productDTO);
    const deletedProduct = await this.softDelete({ id: product.id });
    if (!deletedProduct.affected) {
      throw new NotFoundException(
        `Product with ID: ${product.id} was not found`,
      );
    }
  }
}
