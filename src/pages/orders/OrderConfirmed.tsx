import { Box, Typography } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useParams } from "react-router-dom";
import image from "../../assets/hannah-busing-0BhSKStVtdM-unsplash.jpg";

const OrderConfirmed = () => {
    const { id } = useParams();

  return (
    <Box sx={{ margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <CheckCircleOutlineIcon sx={{ fontSize: "48px" }} />
        <Typography marginY={2}>Your order has been confirmed!</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography marginY={2} variant="subtitle1">Your order ID: {id}</Typography>
            <Typography marginY={2} variant="body2">The chef has heard your order, in the meantime make yourself comfortable</Typography>
            <img src={image} style={{ width: "400px", borderTop: "2px solid", borderBottom: "2px solid", borderColor: "#85ada4", borderRadius: "2px" }} />
        </Box>
    </Box>
  )
}

export default OrderConfirmed