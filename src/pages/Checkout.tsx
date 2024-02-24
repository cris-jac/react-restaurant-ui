import { Box, Button, TextField, useTheme } from "@mui/material"
import React, { useState } from "react";
import ApiResponseModel from "../interfaces/ApiResponseModel";
import { useInitiatePaymentMutation } from "../api/paymentApi";
import { useSelector } from "react-redux";
import { RootState } from "../storage/redux/store";
import UserModel from "../interfaces/UserModel";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    // style
   const { palette } = useTheme();

    // get set
    const [contactName, setContactName] = useState("");
    const [contactPhonenumber, setContactPhonenumber] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    // hooks
    const navigate = useNavigate();

    // here

    // State user 
    const userData: UserModel = useSelector((state: RootState) => state.userAuthStore);

    // Api payment request
    const [initiatePayment] = useInitiatePaymentMutation();

    // HandleSbumit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // userInput object
        const userInput = {
            contactName: contactName,
            contactPhoneNumber: contactPhonenumber,
            contactEmail: contactEmail
        }

        // Api payment request
        const { data }: ApiResponseModel = await initiatePayment(userData.id); 

        // navigate
        navigate("/payment", {
            state: { apiResult: data?.result, userInput }
        });
    }

    // 
    // const handleClick = () => {
    //     console.log(userInput);
    // }

  return (
    <Box maxWidth="md" paddingX={4} margin="auto" sx={{ position: "relative" }}>
        <form
            onSubmit={handleSubmit}
            style={{
                backgroundColor:"rgba(0,0,0,0.1)",
                padding: '16px'
            }}
        >
            <TextField
                label="Name"
                variant="standard"
                size="small"
                margin="normal"
                focused
                value={contactName}
                type="text"
                fullWidth
                onChange={(e) => setContactName(e.target.value)}
                sx={{
                color: palette.primary.contrastText,
                }}
            />
            <TextField
                label="Email"
                variant="standard"
                size="small"
                margin="normal"
                focused
                value={contactEmail}
                type="text"
                fullWidth
                onChange={(e) => setContactEmail(e.target.value)}
                sx={{
                color: palette.primary.contrastText,
                }}
            />
            <TextField
                label="Phone Number"
                variant="standard"
                size="small"
                margin="normal"
                focused
                value={contactPhonenumber}
                type="text"
                fullWidth
                onChange={(e) => setContactPhonenumber(e.target.value)}
                sx={{
                color: palette.primary.contrastText,
                }}
            />

            <Button
                type="submit"
            >
                Continuar
            </Button>
        </form>
    </Box>
  )
}

export default Checkout