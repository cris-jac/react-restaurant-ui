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
      >
        Lorem ipsum dolor sit.
      </Typography>
      <Typography
        variant="body1"
        maxWidth="md"
        marginY={2}
        paddingX={2}
        color={palette.secondary.contrastText}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nihil
        voluptas consectetur quos ipsum minima aliquid nobis est nostrum
        corrupti dolore dolorem, sunt deserunt saepe reprehenderit ex, maiores
        aspernatur voluptate?
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
