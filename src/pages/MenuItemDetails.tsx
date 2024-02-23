import { Details } from "../components/pages/menuItemDetails";
// import image from "../assets/hannah-busing-0BhSKStVtdM-unsplash_3_11zon.jpg";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetMenuItemQuery } from "../api/menuItemApi";

const MenuItemDetails = () => {

  // Get Id - Match the route key
  const { menuItemId } = useParams();

  // Api Get Item
  const { data, isLoading } = useGetMenuItemQuery(menuItemId);

  // Navigate
  // const navigate = useNavigate();

  
  return (
    <Box maxWidth="lg" paddingX={4} sx={{ margin: "auto" }}>
      {(isLoading) ? (
        <p>Still Loading</p>
      ) : (
        <Grid container spacing={2} maxWidth="xl">
          <Grid item xs={12} sm={7}>
          <Box sx={{ 
              aspectRatio: 10 / 10, 
              borderRight: "4px solid",
              borderColor: "#85ada1", 
            }}>
            <img
              src={`http://localhost:5173/${data.result.image}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: 'cover'
              }}
              loading="lazy"
            />
            </Box>
          </Grid>


          <Grid item xs={12} sm={5}>
            <Details item={data.result}/>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default MenuItemDetails;
