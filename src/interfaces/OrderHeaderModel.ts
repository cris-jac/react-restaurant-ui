import OrderDetailsModel from "./OrderDetailModel";

export default interface OrderHeaderModel {
    orderHeaderId: number;
    contactName: string;
    contactPhoneNumber: string;
    contactEmail: string;
    applicationUserId: string;
    user: any;
    orderTotal: number;
    orderDate: string;
    stripePaymentIntentId: string;
    status: string;
    totalItems: number;
    orderDetails: OrderDetailsModel[];
}