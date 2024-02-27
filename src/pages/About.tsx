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
          Lorem ipsum dolor sit amet consectetur.
        </Typography>

        <Typography
          variant="body2"
          marginY={2}
          maxWidth="md"
          paddingX={2}
          align="center"
          color={palette.info.contrastText}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fuga
          sequi odio quasi, quo dolor.
        </Typography>
      </Box>

      <AboutText />
    </Box>
  );
};

export default About;
