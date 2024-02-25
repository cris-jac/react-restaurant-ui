import { CartItemModel } from "../../../interfaces";

export default interface Props {
    data: {
        id:              number;
        userId:          string;
        stripePaymentId: string;
        clientSecret:    string;
        cartItems:       CartItemModel[];
        cartTotal:       number;
    },
    userInput: {
        contactName:        string;
        contactPhoneNumber: string;
        contactEmail:       string;
    }
}