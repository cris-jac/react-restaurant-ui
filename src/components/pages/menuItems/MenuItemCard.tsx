import { Button, Card, CardActionArea, CardMedia, Container, Typography } from "@mui/material"
import image from "../../../../public/images/items/farhad-ibrahimzade-59lfMHMZugY-unsplash_1_11zon.jpg"


const MenuItemCard = () => {
  return (
      <Card sx={{ 
        maxWidth: 345, 
        backgroundColor: 'rgba(0,0,0,0)', 
        textAlign: 'center' ,
        boxShadow: 'none',
        borderRadius: '1%',
        backgroundImage: 'none',
        // padding: '10px'
      }}>
        <CardActionArea sx={{ 
            // borderRadius: '10%' 
            // padding: '10px'
        }}>
          <CardMedia
            component="img"
            height="345"
            image={image}
            alt="green iguana"
            sx={{ 
                borderRadius: "1%",
                filter: 'saturate(80%)',
                ":hover": {
                    // borderRadius: '0',
                    transition: 'all 0.3s ease-in-out',
                    filter: 'saturate(100%)',
                    transform: 'scale(1.05)'
                }
            }}
          />
        </CardActionArea>
        <Typography variant="h5" color='text.secondary' sx={{ paddingTop: '10px' }}>$ 3434</Typography>
        <Typography variant="h6" color='text.primary'>Jugo de tomate frio al vapor</Typography>
        <Button>Add To Cart</Button>
      </Card>
  );
}

export default MenuItemCard