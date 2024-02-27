import {
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Typography,
} from "@mui/material";
import image from "../../../assets/markus-spiske-sFydXGrt5OA-unsplash.jpg";

const AboutText = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const localTheme = {
    card: {
      display: "flex",
      borderRadius: "0px",
      position: "relative",
      bgcolor: "rgba(0,0,0,0)",
      border: "none",
      backgroundImage: "none",
      boxShadow: "none",
      maxWidth: "100%",
      padding: "20px",
      gap: "20px",
      flexDirection: isSmScreen ? "column" : "row-reverse",
      justifyItems: "center",
      alignItems: isSmScreen ? "center" : "flex-start",
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      zIndex: -1,
    },
    title: {
      position: "relative",
    //   paddingBottom: "20px",
      color: theme.palette.primary.contrastText,
    },
    paragraph: {
    //   padding: "4px 20px 4px 20px",
      color: theme.palette.secondary.contrastText,
      bgcolor: theme.palette.secondary.dark,
    },
  };

  return (
    <Container maxWidth="md" sx={localTheme.card}>
      <Box sx={localTheme.textBox}>
        <Typography paddingX={4} variant="h6" gutterBottom sx={localTheme.title}>
          This product
        </Typography>

        <Typography variant="body2" paddingX={4} paddingY={2} sx={localTheme.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          itaque asperiores officia? Ad sunt possimus quam dignissimos adipisci
          odio neque repellendus! Eum officia laudantium assumenda recusandae
          illo ab, vero facilis.
        </Typography>
      </Box>

      <Box>
        <img
          src={image}
          style={{
            height: "300px",
            width: "300px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Container>
  );
};

export default AboutText;
