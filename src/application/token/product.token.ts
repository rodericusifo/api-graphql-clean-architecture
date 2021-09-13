export class ProductTokens {
  public static readonly ProductRepository: unique symbol =
    Symbol('ProductRepository');
  public static readonly CreateProductUseCase: unique symbol = Symbol(
    'CreateProductUseCase',
  );
  public static readonly FindProductByIdUseCase: unique symbol = Symbol(
    'FindProductByIdUseCase',
  );
}
