import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import OrderSummaryProps from "./OrderSummaryProps";
import { priceFormatter } from "../../../utility/priceFormatter";

const OrderSummary = ({ data, userInput }: OrderSummaryProps) => {
  return (
    <Box>
      <Typography marginY={1} variant="subtitle1">
        Contact info
      </Typography>
      <Box>
        <Box
          padding={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Name:</Typography>
          <Typography variant="body1">{userInput.contactName}</Typography>
        </Box>

        <Box
          padding={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Email:</Typography>
          <Typography variant="body1">{userInput.contactEmail}</Typography>
        </Box>

        <Box
          padding={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Phone number:</Typography>
          <Typography variant="body1">
            {userInput.contactPhoneNumber}
          </Typography>
        </Box>
      </Box>

      <Typography marginY={1} variant="subtitle1">
        Order
      </Typography>

      {/* <Box>
            {data.cartItems.map((item) => (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    borderColor: '#b2b2b2',
                }}
                key={item.id}
                padding={1}>
                    <Typography variant="body2">{item.menuItem.name}</Typography>
                    <Typography variant="body2">$ {item.menuItem.priceInUSD} x {item.quantity} =</Typography>
                    <Typography variant="body2">$ {item.menuItem.priceInUSD * item.quantity}</Typography>
                </Box>
            ))}
        </Box> */}

      <Box>
        <Table>
          <TableBody>
            {data.cartItems.map((item) => (
              <TableRow>
                <TableCell>{item.menuItem.name}</TableCell>
                <TableCell colSpan={1}>
                  {priceFormatter(item.menuItem.priceInUSD)} x {item.quantity} =
                </TableCell>
                <TableCell colSpan={1}>
                  {priceFormatter(item.menuItem.priceInUSD * item.quantity)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Box
        marginY={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1">Total:</Typography>
        <Typography variant="subtitle1">
          $ {priceFormatter(data.cartTotal)}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
