import { Box, Button, Grid, Typography, useTheme } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../storage/redux/store"
import { ShoppingCartSummary, ShoppingCartTable } from "../components/pages/shoppingCart"
import { CartItemModel } from "../interfaces"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserModel from "../interfaces/UserModel"

const ShoppingCart = () => {

  // styling
  const { palette } = useTheme();


  // hooks
  const navigate = useNavigate();
  
  // 
  const userData: UserModel = useSelector((state: RootState) => state.userAuthStore);
  if (userData.id == "") {
    navigate('/login');
  }

  const [itemsInCart, setItemsInCart] = useState<CartItemModel[]>([])
  const { cartItems } = useSelector((state: RootState) => state.shoppingCartStore)

  useEffect(() => {
    if (cartItems) {
      setItemsInCart(cartItems)
    }
  }, [cartItems])

  return (
    <Box maxWidth="lg" paddingX={4} marginY={4} sx={{ margin: 'auto' }}>
      <Typography variant="h1" marginY={4}>Shopping Cart</Typography>

      <Grid container
        direction="row"
        alignItems="start"
        // spacing={2}
        gap={2}
        sx={{
          position: 'relative',
        }}
      >

        <Grid item 
          xs={12}
          md
          paddingX={2}
          sx={{
            bgcolor: palette.info.light,
            color: palette.primary.contrastText,
            border: '1px solid',
            borderColor: palette.text.secondary
          }}
        >      
          <ShoppingCartTable items={itemsInCart}/>
        </Grid>

        <Grid item 
          // paddingX={2}
          xs={12} 
          md={4}
          padding={2}
          sx={{
            position: 'sticky',
            right: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            bgcolor: palette.info.light,
            color: palette.primary.contrastText,
            border: '1px solid',
            borderColor: palette.text.secondary
          }}  
        >
          <Typography variant="subtitle2"
            sx={{ 
              paddingBottom: 1,
             }}
          >
            Summary
          </Typography>
          <ShoppingCartSummary items={itemsInCart}/>
          <Link to="/checkout">
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
            >
              Se ve bien
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ShoppingCart