import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { CartItemModel } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import React from "react";
import useStyledToast from "../../../helpers/useStyledToast";
import { Button, useTheme } from "@mui/material";
import { useCreateOrderMutation } from "../../../api/orderApi";
import OrderSummaryProps from "../order/OrderSummaryProps";
import ApiResponseModel from "../../../interfaces/ApiResponseModel";

const PaymentForm = ({ data, userInput }: OrderSummaryProps) => {

    // Check 1: data and userInput - not used yet
    // console.log("Check 1");
    // console.log(data);
    // console.log(userInput);

  // styles
  const { palette } = useTheme();

  // Stripe configs + hooks
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const toastNotify = useStyledToast();

  // Declare Api order post
  const [createOrder] = useCreateOrderMutation();

  // Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     // Check 2: data and userInput - not used yet
    //  console.log("Check 2: Handle submit triggered");

    if (!stripe || !elements) {
      return;
    }

    // Api stripe
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
      redirect: "if_required",
    });

     // Check 3: result from using the stripe api request
    //  console.log("Check 3:");
    //  console.log(result);

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      toastNotify("An error occurred", "error");

      // Check 4: result error
      // console.log("Check 4:");
      // console.log(result.error);
      // console.log(result.error.message);
    } else {
      // set the order details for api order
      let totalAmout = 0;
      let totalItems = 0;
      const orderDetailsDto: any[] = [];
      data.cartItems.forEach((item: CartItemModel) => {
        const orderItem: any = {};
        orderItem["menuItemId"] = item.menuItem.id;
        orderItem["quantity"] = item.quantity;
        orderItem["itemName"] = item.menuItem.name;
        orderItem["price"] = item.menuItem.priceInUSD;
        orderItem["image"] = item.menuItem.image;   // Added 
        orderDetailsDto.push(orderItem);
        totalAmout += item.menuItem.priceInUSD * item.quantity;
        totalItems += item.quantity;
      });

      // check 5: order body set --- DONE
      // console.log("Check 5:");
      // console.log(orderDetailsDto);


      // Api order create request
      const response: ApiResponseModel = await createOrder({
        contactName: userInput.contactName,
        contactPhoneNumber: userInput.contactPhoneNumber,
        contactEmail: userInput.contactEmail,
        applicationUserId: data.userId,
        stripePaymentIntentId: data.stripePaymentId,
        orderTotal: totalAmout,
        totalItems: totalItems,
        orderDetailsDto: orderDetailsDto,
        status:
          result.paymentIntent.status == "succeeded" ? "Confirmed" : "Pending",
      });

      // Check 6: response object
      // console.log("Check 6");
      // console.log(response);

      //check if there is a response
      if (response) {

        // Check 7: response object
        // console.log("Check 7: There is response");

        // check is status is confirmed
        if (response.data?.result.status === "Confirmed") {
            // Check 8: response object
            console.log("Check 8: The response status is confirmed");

          // navigate to order created succesfullly screen
          toastNotify("Order confirmed");
          navigate(`/orders/orderConfirmed/${response.data.result.orderHeaderId}`);
        } else {
        // Check 8: response object
        // console.log("Check 8: The response status is confirmed");
        // console.log(response);
        // console.log(response.error);

          // navigate to failed
          toastNotify("An issue has occurred", "error");
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: palette.info.dark,
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        borderTop: "2px solid",
        borderBottom: "2px solid",
        borderColor: "#85ADA1",
        borderRadius: "2px",
      }}
    >
      <PaymentElement />
      <Button
        sx={{
          border: "2px solid",
          borderRadius: "2px",
          marginTop: 3,
          paddingX: 3,
          borderColor: palette.text.secondary,
          color: palette.text.secondary,
          bgcolor: palette.info.light,
          ":hover": {
            color: palette.info.light,
            bgcolor: palette.text.secondary,
          },
        }}
        type="submit"
      >
        Finalizar compra
      </Button>
    </form>
  );
};

export default PaymentForm;
