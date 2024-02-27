import {
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { AboutStory, AboutText } from "../components/pages/about";

const About = () => {
  const { palette } = useTheme();
  const localTheme = {
    bannerBox: {
      bgcolor: palette.primary.light,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
  };

  return (
    <Box>
      <Typography align="center" padding={2} variant="h1">
        Our story
      </Typography>

      <AboutStory />

      <Box sx={localTheme.bannerBox} marginY={2} paddingY={2}>
        <Typography
          variant="h1"
          marginY={2}
          maxWidth="md"
          paddingX={2}
          align="center"
          color={palette.primary.contrastText}
        >
          "every diner can find a dish that aligns with their dietary needs and preferences"
        </Typography>

        <Typography
          variant="body2"
          marginY={2}
          maxWidth="md"
          paddingX={2}
          align="center"
          color={palette.info.contrastText}
        >
          Our commitment to vegetarianism and sustainability extends beyond our menu, reflecting our dedication to fostering a sense of harmony and inclusivity within our community. 
        </Typography>
      </Box>

      <AboutText />
    </Box>
  );
};

export default About;
