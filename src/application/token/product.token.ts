export class ProductTokens {
  public static readonly ProductRepository: unique symbol =
    Symbol('ProductRepository');
  public static readonly CreateProductUseCase: unique symbol = Symbol(
    'CreateProductUseCase',
  );
  public static readonly FindProductByIdUseCase: unique symbol = Symbol(
    'FindProductByIdUseCase',
  );
  public static readonly FindAllProductUseCase: unique symbol = Symbol(
    'FindAllProductUseCase',
  );
  public static readonly UpdateProductUseCase: unique symbol = Symbol(
    'UpdateProductUseCase',
  );
  public static readonly DeleteProductUseCase: unique symbol = Symbol(
    'DeleteProductUseCase',
  );
}
