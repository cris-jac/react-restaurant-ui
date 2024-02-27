import { Box, Typography } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useParams } from "react-router-dom";
import image from "../../assets/hannah-busing-0BhSKStVtdM-unsplash.jpg";

const OrderConfirmed = () => {
    const { id } = useParams();

  return (
    <Box sx={{ margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CheckCircleOutlineIcon sx={{ fontSize: "48px" }} />
        <Box>
            <Typography>Your order has been confirmed!</Typography>
            <Typography>Your order ID: {id}</Typography>
            <Typography>The chef has heard your order, in the meantime make yourself comfortable</Typography>
            <img src={image} style={{ width: "400px" }} />
        </Box>
    </Box>
  )
}

export default OrderConfirmed