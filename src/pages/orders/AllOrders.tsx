import { useSelector } from "react-redux"
import { UserModel } from "../../interfaces"
import { RootState } from "../../storage/redux/store";
import { useNavigate } from "react-router-dom";
import { useGetAllOrdersQuery } from "../../api/orderApi";
import { Box, CircularProgress, Typography } from "@mui/material";
import CollapsibleTable from "../../components/pages/order/CollapsibleTable";

const AllOrders = () => {

    const navigate = useNavigate();

    const userData: UserModel = useSelector((state: RootState) => state.userAuthStore);

    if (userData.role !== "admin") {
        navigate("/orders/myOrders");
    }

    const { data: ordersData, isLoading } = useGetAllOrdersQuery(null);

    if (isLoading) return <CircularProgress/>

    console.log(ordersData);

  return (
    <Box maxWidth="lg" paddingX={4} sx={{ margin: "auto" }}>
        <Typography variant="h1" align="center">All Orders</Typography>
        <CollapsibleTable orderHeaders={ordersData.result} />
    </Box>
  )
}

export default AllOrders