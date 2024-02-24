import { Box, Typography } from "@mui/material"

const OrderSummary = () => {
  return (
    <Box>
        <Typography>Contact info</Typography>
        <Box>
            <Typography>Name: </Typography>
            <Typography>Email: </Typography>
            <Typography>Phone Number: </Typography>
        </Box>
        <Typography>Order</Typography>
        <Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                border: '1px solid',
                borderColor: '#b2b2b2'
            }}>
                <Typography>Name</Typography>
                <Typography>Quantity x Price</Typography>
            </Box>

        </Box>
        <Typography>Total price</Typography>
    </Box>
  )
}

export default OrderSummary