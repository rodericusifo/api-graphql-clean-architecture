import { IQuery } from '@core/presistence/interface/query.interface';
import { ProductDTO } from '@core/use-case/product/dto/product.dto';

export interface IProductRepositoryPort {
  storeProduct(productDTO: Partial<ProductDTO>);
  findProductById(productDTO: Partial<ProductDTO>): Promise<ProductDTO>;
  findAllProduct(query: IQuery): Promise<ProductDTO[]>;
}
