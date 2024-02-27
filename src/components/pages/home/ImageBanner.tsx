import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BannerItemModel } from "../../../interfaces";
// import { BannerItemMode } from "../../../interfaces/BannerItemModel";
// import image from "../../../../public/images/hannah-busing-0BhSKStVtdM-unsplash_3_11zon.jpg";
// import mg from "../../../assets/items/"
// import mg from "./../../../assets/items/asnim-ansari-SqYmTDQYMjo-unsplash_4_11zon.jpg"

interface Props {
    items: BannerItemModel[];
}

// const items: Props = [
//   { name: "main dishe" },
//   { name: "guarniciones" },
//   { name: "sopas" },
// ];

const ImageBanner = ({ items }: Props) => {
// Styling
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("md"));
  const localTheme = {
    bannerBox: {
      bgcolor: theme.palette.primary.light,
      //   borderTop: "2px dashed",
      //   borderBottom: "2px dashed",
      //   borderColor: "#85ADA1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    imagesContainer: {
      position: "relative",
      display: "flex",
      flexDirection: isSmScreen ? "column" : "row",
    },
    imageBox: {
      borderTop: "4px solid",
      borderColor: theme.palette.background.default,
      filter: "saturate(75%)",
      ":hover": {
        filter: "saturate(100%)",
      },
    },
    typoBox: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      bottom: "40px",
    },
    imageTypo: {
      bgcolor: theme.palette.secondary.light,
      borderBottom: "4px solid",
      borderColor: theme.palette.background.default,
    },
  };

  return (
    <Box sx={localTheme.bannerBox}>
      <Typography
        variant="h1"
        marginY={2}
        maxWidth="md"
        paddingX={2}
        align="center"
        color={theme.palette.primary.contrastText}
      >
        Our dishes
      </Typography>

      <Typography
        variant="body2"
        marginY={2}
        maxWidth="md"
        paddingX={2}
        align="center"
        color={theme.palette.info.contrastText}
      >
        Indulge in a diverse array of vegetarian dishes meticulously crafted to tantalize your taste buds. Whether you crave bold flavors or crave diverse textures, our menu offers a variety of options to suit every palate, ensuring a delightful dining experience for all discerning vegetarians.
      </Typography>

      <Box marginY={2} sx={localTheme.imagesContainer}>
        {items.map((item, index) => (
          <Box marginX={1} key={index}>
            <Box sx={localTheme.imageBox}>
              <img
                src={item?.picture}
                height={isSmScreen ? 360 : 280}
                width={isSmScreen ? 360 : 280}
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box sx={localTheme.typoBox}>
              <Typography
                variant="h4"
                paddingX={1}
                color={theme.palette.primary.contrastText}
                sx={localTheme.imageTypo}
              >
                {item.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

          {/* <img src={"./../../../assets/items/vinitha-v-aApxuprXL_4-unsplash.jpg"}></img> */}
          {/* <img src={mg} /> */}

      {/* <Grid 
      container maxWidth="lg" 
      paddingX={2} 
      spacing={2} 
      sx={{ 
        position: 'relative', 
        // margin: 'auto' 
        }}>
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            height='width'
            key={index}
            // sx={{
            //   borderTop: "4px solid",
            //   borderColor: theme.palette.background.default,
            //   filter: "saturate(75%)",
            //   ":hover": {
            //     filter: "saturate(100%)",
            //   },
            //   // borderTop: "4px solid",
            //   // borderColor: theme.palette.background.default,
            //   // filter: 'saturate(75%)',
            //   // ":hover": {
            //   //     filter: 'saturate(100%)'
            // }}
          >
            <Box
              sx={{
                borderTop: "4px solid",
                borderColor: theme.palette.background.default,
                filter: "saturate(75%)",
                ":hover": {
                  filter: "saturate(100%)",
                },
                height: '100%',
                width: '100%',
                overflow: 'hidden'
              }}
            >
                <img src={image}  />

            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                bottom: "40px",
              }}
            >
              <Typography
                variant="h4"
                paddingX={1}
                //   color={palette.text.secondary}
                color={theme.palette.primary.contrastText}
                sx={{
                  // bgcolor: palette.background.default,
                  bgcolor: theme.palette.secondary.light,
                  // bgcolor: palette.primary.main,
                  borderBottom: "4px solid",
                  // borderColor: "#C2D6D0",
                  borderColor: theme.palette.background.default,
                }}
              >
                {item.name}
              </Typography>
            </Box>

          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default ImageBanner;
