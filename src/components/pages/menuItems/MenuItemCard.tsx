import { Avatar, Box, Card, CardActionArea, CardMedia, IconButton, Typography, useTheme } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import image from "../../../../public/images/items/farhad-ibrahimzade-59lfMHMZugY-unsplash_1_11zon.jpg"
import { useState } from "react";


const MenuItemCard = () => {

  // Styling
  const { palette } = useTheme();

  const localTheme = {
    card: { 
      maxWidth: 240, 
      backgroundColor: 'rgba(0,0,0,0)', 
      textAlign: 'center' ,
      boxShadow: 'none',
      borderRadius: '0',
      backgroundImage: 'none',
      position: 'relative'
    },
    cardMedia: { 
      borderRadius: "0",
      filter: 'saturate(70%)',
      ":hover": {
          filter: 'saturate(100%)',
      }
  },
  box: {
    padding: '10px 5px',
          border: '1px solid',
          borderColor: palette.divider
  }

  }

  const [IsOnCart, setIsOnCart] = useState<boolean>(false);

  return (
      <Card sx={
        localTheme.card
      }>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="green iguana"
            sx={
              localTheme.cardMedia
            }
          />
        </CardActionArea>
        <Box sx={
          localTheme.box
        }>
          <Typography variant="h5" color={palette.primary.contrastText}>Jugo de tomate frio al vapor</Typography>
          <Typography variant="h4" color={palette.text.secondary}>$ 3434</Typography>
        </Box>
        <Avatar 
          onClick={() => setIsOnCart(!IsOnCart)} 
          sx={{ 
            // overflow: 'hidden',
            position: "absolute",
            top: '5px',
            right: '10px',
            zIndex: '1',
            backgroundColor: palette.background.default,
            borderRadius: '0px',
            border: '1px solid',
            borderColor: palette.divider,
          }}
        >
          <IconButton sx={{ margin: "10px" }}>
            {IsOnCart ? (
              <AddShoppingCartIcon sx={{ 
                color: "#85ADA1", 
              }}/>
            ) : (
              <ShoppingCartIcon sx={{ 
                color: "#85ADA1", 
              }}/>
            )}
          </IconButton>
        </Avatar>
      </Card>
  );
}

export default MenuItemCard