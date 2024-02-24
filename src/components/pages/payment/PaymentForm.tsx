import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { CartItemModel } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import React from "react";
import useStyledToast from "../../../helpers/useStyledToast";
import { Button } from "@mui/material";

interface Props {
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

const PaymentForm = () => {

    // Stripe configs + hooks
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const toastNotify = useStyledToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      redirect: "if_required"
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      toastNotify("An error occurred", "error");
      console.log(result.error.message);
    } else {
      // set the body for api order
      
      // Api order create request
      // const response = await createOrder({...})

      //check if there is a response
        // check is status is confirmed
          // navigate to order created succesfullly screen
        // else
          // navigate to failed
      console.log("Great success");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit">
        Concluir compra
      </Button>
    </form>
  )
}

export default PaymentForm