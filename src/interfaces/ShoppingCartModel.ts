import CartItemModel from "./CartItemModel"

export default interface ShoppingCartModel {
    id?: number;
    userId?: string;
    cartItems?: CartItemModel[];
    cartTotal?: number;
    stripePaymentId?: any;
    clientSecret?: any;
  }