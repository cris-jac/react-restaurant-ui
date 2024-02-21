import { Box, Grid, Typography } from "@mui/material"
import { MenuItemCard } from "../components/pages/menuItems"
import { useSelector } from "react-redux"
import { RootState } from "../storage/redux/store"
import { MenuItemModel } from "../interfaces"
// import image from "../assets/dan-meyers-0AgtPoAARtE-unsplash_1_11zon.jpg"

// const items = [
//   { name: 'Jugo de tomate frio', price: 7500 },
//   { name: 'Pescado rabioso', price: 12500 },
//   { name: 'The ritual of the banana', price: 9000 },
//   { name: 'Jugo de tomate frio', price: 7500 },
//   { name: 'Pescado rabioso', price: 12500 },
//   { name: 'The ritual of the banana', price: 9000 },
// ]

const Menu = () => {

  const { menuItems } = useSelector((state: RootState) => state.menuItemStore)

  return (
    <Box maxWidth="lg" paddingX={2} sx={{ margin: 'auto' }}>
      <Typography variant="h1" marginBottom={2} >Our menu</Typography>
      <Grid container spacing={2}>
        {menuItems.map((item: MenuItemModel, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <MenuItemCard name={item.name} price={item.priceInUSD} img={item.image} id={item.id}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Menu
