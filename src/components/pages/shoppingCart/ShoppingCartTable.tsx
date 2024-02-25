import {
  Avatar,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateShoppingCartMutation } from "../../../api/shoppingCartApi";
// import { RootState } from "../../../storage/redux/store";
import { CartItemModel } from "../../../interfaces";
import {
  removeFromCart,
  updateQuantity,
} from "../../../storage/redux/cartItemSlice";
import UserModel from "../../../interfaces/UserModel";
import { RootState } from "../../../storage/redux/store";

interface Props {
  items: CartItemModel[];
}

const ShoppingCartTable = ({ items }: Props) => {
  // Styling
  const { palette } = useTheme();
  const contrast = palette.primary.contrastText;
  const localTheme = {
    quantityIcon: {
      padding: "0px",
      margin: "0px",
      borderRadius: "1px",
      color: palette.text.secondary,
    },
    icon: {
      color: palette.text.secondary,
      fontSize: '18px'
    },
  };

  // hook - dispatch
  const dispatch = useDispatch();

  // Api mutation cart
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  // UserId hardcoded
  // const userId = "abd83cf0-2b6a-49a9-9965-568ec7d4cdf3";
  const userData: UserModel = useSelector((state: RootState) => state.userAuthStore);

  // Store get state
  // const { cartItems } = useSelector((state: RootState) => state.shoppingCartStore);

  // Handle change quantity
  const handleItemQuantity = (
    updateQuantityBy: number,
    cartItem: CartItemModel
  ) => {
    // The item would be less than 0
    if (
      (updateQuantityBy == -1 && cartItem.quantity == 1) ||
      updateQuantityBy == 0
    ) {
      // Store remove from cart
      dispatch(removeFromCart({ cartItem }));
      // Api mutation
      updateShoppingCart({
        menuItemId: cartItem.menuItem.id,
        updateQuantityBy: 0,
        userId: userData.id //userId,
      });
    } else {
      // Store update quantity
      dispatch(
        updateQuantity({
          cartItem,
          quantity: cartItem.quantity + updateQuantityBy,
        })
      );
      // Api mutation
      updateShoppingCart({
        menuItemId: cartItem.menuItem.id,
        updateQuantityBy: updateQuantityBy,
        userId: userData.id  //userId,
      });
    }
  };

  return (
    <TableContainer
      sx={{
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow 
            sx={{ borderBottom: '1px solid', borderColor: palette.primary.contrastText }}
          >
            <TableCell  align="left">
              <Typography color={contrast}>Product</Typography>
            </TableCell>
            <TableCell  align="center">
              <Typography color={contrast}>Price</Typography>
            </TableCell>
            <TableCell  align="center">
              <Typography color={contrast}>Quantity</Typography>
            </TableCell>
            <TableCell  align="center">
              <Typography color={contrast}>Subtotal</Typography>
            </TableCell>
            <TableCell  align="center"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="left">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar 
                    alt={item.menuItem.name}
                    src={item.menuItem.image}
                    // sx={{
                    //     width: 56,
                    //     height: 56
                    // }}
                  />
                  <Typography paddingX={2} color={contrast} variant="body2">
                    {item.menuItem.name}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell align="center" width="15%">
                <Typography color={contrast} variant="body2">
                  $ {item.menuItem.priceInUSD}
                </Typography>
              </TableCell>

              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography paddingX={2} color={contrast} variant="body2">
                    {item.quantity}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                    }}
                  >
                    <IconButton
                      sx={localTheme.quantityIcon}
                      onClick={() => handleItemQuantity(+1, item)}
                    >
                      <ArrowDropUpIcon />
                    </IconButton>
                    <IconButton
                      sx={localTheme.quantityIcon}
                      onClick={() => handleItemQuantity(-1, item)}
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                  </Box>
                </Box>
              </TableCell>

              <TableCell align="center">
                <Typography color={contrast} variant="body2">
                  $ {item.menuItem.priceInUSD * item.quantity}
                </Typography>
              </TableCell>

              <TableCell align="center" sx={
                { 
                    alignItems: 'center',
                    px: '1px'
                }
              }>
                <IconButton onClick={() => handleItemQuantity(0, item)}>
                  <ClearIcon sx={localTheme.icon} />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShoppingCartTable;
