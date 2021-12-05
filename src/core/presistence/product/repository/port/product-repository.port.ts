import { IQuery } from '@core/presistence/interface/query.interface';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';

export interface IProductRepositoryPort {
  storeProduct(productDTO: Partial<ProductDTO>);
  findAllProduct(query: IQuery): Promise<ProductDTO[]>;
  findProductById(productDTO: Partial<ProductDTO>): Promise<ProductDTO>;
  updateProduct(productDTO: Partial<ProductDTO>);
  deleteProduct(productDTO: Partial<ProductDTO>);
}
