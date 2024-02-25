import { MenuItemModel } from "."

export default interface OrderDetailsModel {
    orderDetailId: number;
    orderHeaderId: number;
    menuItemId: number;
    menuItem: MenuItemModel;
    quantity: number;
    itemName: string;
    price: number;
    image: string;
}