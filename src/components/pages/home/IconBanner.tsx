import { Box, Typography, useTheme } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SpaIcon from "@mui/icons-material/Spa";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const IconBanner = () => {
  const { palette } = useTheme();

  const localTheme = {
    bannerBox: {
      bgcolor: palette.secondary.light,
      borderTop: "1px solid",
      borderBottom: "1px solid",
      borderColor: "#C2D6D0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    icon: {
      color: palette.info.contrastText,
      fontSize: "96px",
    },
  };

  return (
    <Box sx={localTheme.bannerBox}>
      <Typography
        variant="h1"
        maxWidth="sm"
        marginY={2}
        color={palette.primary.contrastText}
        align="center"
      >
        Your satisfaction
      </Typography>
      <Typography
        variant="body1"
        maxWidth="md"
        marginY={2}
        paddingX={2}
        color={palette.secondary.contrastText}
        align="center"
      >
        At our restaurant, savoring your favorite vegetables is not just an option but a promise. Whether you dine with us or opt for takeout, your satisfaction is our priority, ensuring each dish meets your expectations and delights your taste buds with the freshest and most flavorful ingredients.
      </Typography>
      <Box maxWidth="sm" marginY={2}>
        <SpaIcon sx={localTheme.icon} />
        <AccessTimeFilledIcon
          sx={{ ...localTheme.icon, marginLeft: "48px", marginRight: "48px" }}
        />
        <EmojiEmotionsIcon sx={localTheme.icon} />
      </Box>
    </Box>
  );
};

export default IconBanner;
