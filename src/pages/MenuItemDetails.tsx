import { Details } from "../components/pages/menuItemDetails";
import image from "../../public/images/hannah-busing-0BhSKStVtdM-unsplash_3_11zon.jpg";
import { Box, Grid } from "@mui/material";

const MenuItemDetails = () => {
  return (
    <Box maxWidth="lg" sx={{ margin: "auto" }}>
      <Grid container spacing={2} maxWidth="xl">
        <Grid item xs={12} sm={7}>
          <img
            src={image}
            style={{
              border: "4px 0px 0px 0px solid",
              borderColor: "#85ada1",
              width: "100%",
            }}
            loading="lazy"
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Details />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuItemDetails;
