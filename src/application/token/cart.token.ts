export class CartTokens {
  public static readonly CartRepository: unique symbol =
    Symbol('CartRepository');
  public static readonly CreateCartUseCase: unique symbol =
    Symbol('CreateCartUseCase');
  public static readonly FindAllCartUseCase: unique symbol =
    Symbol('FindAllCartUseCase');
}
