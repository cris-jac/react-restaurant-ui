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
            <img
              src={`http://localhost:5173/${data.result.image}`}
              style={{
                border: "4px 0px 0px 0px solid",
                borderColor: "#85ada1",
                width: "100%",
                // objectFit: 'contain'
              }}
              loading="lazy"
            />
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
