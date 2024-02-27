import { Box, Button, Typography, useTheme } from "@mui/material";
import image from "../assets/thought-catalog-fnztlIb52gU-unsplash.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { palette, typography } = useTheme();

  return (
    <Box
      paddingX={4}
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "64px", fontFamily: typography.h1.fontFamily }} gutterBottom>
        NOT FOUND
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        It seems like you found an empty dish :/
      </Typography>
      <Box
        maxHeight={400}
        marginY={2}
        maxWidth={400}
        sx={{ filter: "saturate(0%)" }}
      >
        <img
          src={image}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" gutterBottom>
          Have you checked the menu?
        </Typography>
        <Link to="/menu">
          <Button
            sx={{
              border: "2px solid",
              borderRadius: "1px",
              marginTop: 3,
              paddingX: 3,
              borderColor: palette.text.secondary,
              color: palette.text.secondary,
              bgcolor: palette.info.light,
              ":hover": {
                color: palette.info.light,
                bgcolor: palette.text.secondary,
              },
            }}
          >
            See Menu
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
