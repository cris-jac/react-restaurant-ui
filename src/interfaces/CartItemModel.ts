import { MenuItemModel } from "."

export default interface CartItemModel {
    id: number;
    menuItemId: number;
    menuItem: MenuItemModel;
    quantity: number;
  }