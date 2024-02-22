import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import image from "../../../../public/images/items/farhad-ibrahimzade-59lfMHMZugY-unsplash_1_11zon.jpg"
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useUpdateShoppingCartMutation } from "../../../api/shoppingCartApi";
import ApiResponseModel from "../../../interfaces/ApiResponseModel";
// import toastNotify from "../../../helpers/useStyledToast";
import useStyledToast from "../../../helpers/useStyledToast";
// import { MenuItemModel } from "../../../interfaces";

interface Props {
  id: number;
  name: string;
  price: number;
  img: string;
}

const MenuItemCard = ({ name, price, img, id }: Props) => {
  // Styling
  const { palette } = useTheme();

  const localTheme = {
    card: {
      maxWidth: 240,
      backgroundColor: "rgba(0,0,0,0)",
      textAlign: "center",
      boxShadow: "none",
      borderRadius: "0",
      backgroundImage: "none",
      position: "relative",
    },
    cardMedia: {
      borderRadius: "0",
      filter: "saturate(70%)",
      ":hover": {
        filter: "saturate(100%)",
      },
    },
    box: {
      padding: "10px 5px",
      border: "1px solid",
      borderColor: palette.divider,
    },
    avatar: {
      position: "absolute",
      top: "5px",
      right: "10px",
      zIndex: "1",
      backgroundColor: palette.background.default,
      borderRadius: "0px",
      border: "1px solid",
      borderColor: palette.divider,
    }
  };

  // Toast
  const toastNotify = useStyledToast();

  // Manage Add to cart
  // Id hardcoded
  const userId = "abd83cf0-2b6a-49a9-9965-568ec7d4cdf3";
  // Declare Api request
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  // 
  const handleAddToCart = async (menuItemId: number) => {
    const response: ApiResponseModel = await updateShoppingCart({
      menuItemId: menuItemId,
      userId: userId,
      updateQuantityBy: 1
    })

    if (response.data && response.data.isSuccess) {
      // console.log("Great success")
      toastNotify("Item added to cart successfully!");
      // setIsOnCart(true);
    } else {
      console.log(JSON.stringify(response.data?.errorMessages))
    }
  }


  // const [IsOnCart, setIsOnCart] = useState<boolean>(false);

  return (
    <Card sx={localTheme.card}>
      <CardActionArea>
        <Link to={`/menuItemDetails/${id}`}>
        <CardMedia
          component="img"
          height="240"
          image={`http://localhost:5173/${img}`}
          alt={name}
          sx={localTheme.cardMedia}
        />
        </Link>
      </CardActionArea>
      <Box sx={localTheme.box}>
        <Typography 
        variant="h5" 
        // height="48px" 
        gutterBottom 
        color={palette.primary.contrastText}
        sx={{ overflow: 'hidden', height: '48px' }}
        >
          {name}
        </Typography>
        <Typography variant="h4" color={palette.text.secondary}>
          $ {price}
        </Typography>
      </Box>
      <Avatar
        onClick={() => handleAddToCart(id)}
        sx={localTheme.avatar}
      >
        <IconButton sx={{ margin: "10px" }}>
          <AddShoppingCartIcon
            sx={{ color: "#85ada1" }}
          />
          {/* {IsOnCart ? (
            <ShoppingCartIcon
              sx={{
                color: "#85ADA1",
              }}
            />
          ) : (
            <AddShoppingCartIcon
              sx={{
                color: "#85ADA1",
              }}
            />
          )} */}
        </IconButton>
      </Avatar>
    </Card>
  );
};

export default MenuItemCard;
