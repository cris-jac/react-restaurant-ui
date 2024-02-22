import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { MenuItemModel } from "../../../interfaces";
import { useState } from "react";
import { useUpdateShoppingCartMutation } from "../../../api/shoppingCartApi";
import { useNavigate } from "react-router-dom";
import ApiResponseModel from "../../../interfaces/ApiResponseModel";
import useStyledToast from "../../../helpers/useStyledToast";

interface Props {
  item: MenuItemModel
}

const Details = ({ item }: Props) => {

  // Styling
  const { palette, typography } = useTheme();

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
  const userId = "abd83cf0-2b6a-49a9-9965-568ec7d4cdf3";

  // Manage changes in quantity
  const handleQuantity = (counter: number) => {
    let newQuantity = quantity + counter;
    if (newQuantity == 0) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    return;
  } 

  //
  const handleUpdateCart = async(menuItemId: number) => {
    // If user is not logged in
    if (!userId) {
      navigate('/login');
      return;
    }
    // Make mutations
    const response: ApiResponseModel = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
      userId: userId
    })
    // Check response
    if (response.data && response.data.isSuccess) {
      toastNotify("Item added to card successfully");
    }
  }

  return (
    <Box maxWidth="xs" sx={{ p: "4px" }}>
      <Typography variant="h3" sx={typo} marginBottom={2} >
        {item.name}
      </Typography>
      <Typography
        // gutterBottom
        variant="h3"
        marginBottom={2}
        color="rgba(0,0,0,0)"
        sx={{
          padding: "0px 20px",
          bgcolor: "#85ada1",
          color: palette.background.default,
          borderLeft: "4px solid #85ada1",
          // textAlign: 'left'
        }}
      >
        $ {item.priceInUSD}
      </Typography>
      <Typography marginBottom={2} variant="body1" sx={typo}>
        {item.description}
      </Typography>

      <Box
        marginBottom={2}
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
          borderRadius: '1px',
          marginTop: 1,
          paddingX: 3,
          borderColor: palette.text.secondary,
          color: palette.text.secondary,
          bgcolor: palette.info.light,
          ":hover": {
            color: palette.info.light,
            bgcolor: palette.text.secondary,
          }
        }}
        onClick={() => handleUpdateCart(item.id)}
      >
        Aniadir al carro
      </Button>
    </Box>
  );
};

export default Details;
