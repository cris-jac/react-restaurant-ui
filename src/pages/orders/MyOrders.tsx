import { Box, CircularProgress, Typography } from "@mui/material"
// import { OrderList } from "../../components/pages/order"
import { useSelector } from "react-redux"
import { RootState } from "../../storage/redux/store";
import { useGetOrdersQuery } from "../../api/orderApi";
import CollapsibleTable from "../../components/pages/order/CollapsibleTable";



const MyOrders = () => {

    // State user data
    const id: string = useSelector((state: RootState) => state.userAuthStore.id);

    // Api orders query
    const { data: ordersData, isLoading } = useGetOrdersQuery(id); 

    if (isLoading) return (<CircularProgress />)

    // console.log(ordersData);

  return (
    <Box maxWidth="lg" paddingX={4} sx={{ margin: "auto" }}>
        <Typography variant="h1" align="center">All Orders</Typography>
        <CollapsibleTable orderHeaders={ordersData.result} />
    </Box>
  )
}

export default MyOrders