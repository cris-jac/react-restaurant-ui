import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MenuItemModel } from "../../../interfaces";
import { useState } from "react";
import { useUpdateShoppingCartMutation } from "../../../api/shoppingCartApi";
import { NavLink, useNavigate } from "react-router-dom";
import ApiResponseModel from "../../../interfaces/ApiResponseModel";
import useStyledToast from "../../../helpers/useStyledToast";
import UserModel from "../../../interfaces/UserModel";
import { useSelector } from "react-redux";
import { RootState } from "../../../storage/redux/store";

interface Props {
  item: MenuItemModel;
}

const Details = ({ item }: Props) => {
  // Styling
  const { palette, typography, breakpoints } = useTheme();
  const isMdScreen = useMediaQuery(breakpoints.down("md"));
  const typo = {
    padding: "0px 20px",
    borderLeft: "4px solid #85ada1",
    color: palette.primary.contrastText,
  };

  // hook: navigate
  const navigate = useNavigate();
  // hook: toastNotify
  const toastNotify = useStyledToast();
  // get set quantity
  const [quantity, setQuantity] = useState(1);
  // Define Api mutation
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  // Update user Id
  const userData: UserModel = useSelector(
    (state: RootState) => state.userAuthStore
  );

  // Manage changes in quantity
  const handleQuantity = (counter: number) => {
    let newQuantity = quantity + counter;
    if (newQuantity == 0) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    return;
  };

  const handleUpdateCart = async (menuItemId: number) => {
    // If user is not logged in
    if (!userData.id) {
      navigate("/login");
      return;
    }
    // Make mutations
    const response: ApiResponseModel = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
      userId: userData.id,
    });
    // Check response
    if (response.data && response.data.isSuccess) {
      toastNotify("Item added to card successfully");
    }
  };

  return (
    <Box maxWidth="xs" sx={{ p: "4px" }}>
      <Typography variant="h3" sx={typo} marginBottom={2}>
        {item.name}
      </Typography>
      <Typography
        variant="h3"
        marginBottom={2}
        color="rgba(0,0,0,0)"
        sx={{
          padding: "0px 20px",
          bgcolor: "#85ada1",
          color: palette.background.default,
          borderLeft: "4px solid #85ada1",
        }}
      >
        $ {item.priceInUSD}
      </Typography>
      <Typography marginBottom={2} variant="body1" sx={typo}>
        {item.description}
      </Typography>

      <Box
        marginBottom={2}
        sx={{
          display: "flex",
          flexDirection: isMdScreen ? "column" : "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography variant="body1" sx={typo}>
            Cantidad
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid",
              borderColor: "#85ada1",
            }}
          >
            <IconButton
              sx={{
                bgcolor: "#85ADA1",
                borderRadius: "0px",
                padding: "4px",
              }}
              onClick={() => handleQuantity(-1)}
            >
              <RemoveIcon
                sx={{
                  color: palette.primary.contrastText,
                }}
              />
            </IconButton>
            <span
              style={{
                backgroundColor: palette.background.default,
                fontSize: typography.body1.fontSize,

                borderColor: "#85ada1",
                width: "40px",
                textAlign: "center",
                color: palette.primary.contrastText,
              }}
            >
              {quantity}
            </span>

            <IconButton
              sx={{
                bgcolor: "#85ADA1",
                borderRadius: "0px",
                padding: "4px",
              }}
              onClick={() => handleQuantity(+1)}
            >
              <AddIcon
                sx={{
                  color: palette.primary.contrastText,
                }}
              />
            </IconButton>
          </Box>
        </Box>

        <Button
          sx={{
            border: "2px solid",
            borderRadius: "1px",
            marginTop: 1,
            marginX: 1,
            alignmentBaseline: "auto",
            paddingX: 2,
            borderColor: palette.text.secondary,
            color: palette.text.secondary,
            bgcolor: palette.info.light,
            ":hover": {
              color: palette.info.light,
              bgcolor: palette.text.secondary,
            },
            textTransform: "none",
          }}
          onClick={() => handleUpdateCart(item.id)}
          startIcon={<AddShoppingCartIcon />}
        >
          Añadir al carro
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignContent: "center",
        }}
      >
        <NavLink to={"/shoppingCart"} style={{ width: "100%" }}>
          <Button
            sx={{
              border: "2px solid",
              borderRadius: "1px",
              marginTop: 1,
              paddingX: 3,
              borderColor: palette.text.secondary,
              color: palette.info.light,
              bgcolor: palette.text.secondary,
              ":hover": {
                color: palette.text.secondary,
                bgcolor: palette.info.light,
              },
              width: "100%",
            }}
            endIcon={<ShoppingCartCheckoutIcon />}
          >
            Ir al carro
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Details;
