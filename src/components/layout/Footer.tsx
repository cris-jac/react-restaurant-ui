import {
  Container,
  Typography,
  Divider,
  List,
  useTheme,
  Box,
  IconButton,
} from "@mui/material";
// import theme from "../../theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import logo from "./../../assets/LastLogo1.png";
import NavigationButton from "./NavigationButton";

const links = [
  { name: "Menu", route: "/menu" },
  { name: "Our story", route: "/about" },
  { name: "Contact", route: "/contact" },
];

const Footer = () => {
  const { palette, typography } = useTheme();

  const localTheme = {
    footer: {
      position: "fixed",
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.05)",
      width: "100%",
      boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.2)",
    },
    firstContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      padding: "16px 0px",
    },
    secondContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      padding: "0px 4px 10px 0px",
    },
    typo: {
      fontSize: typography.overline,
      textTransform: "capitalize",
      color: palette.primary.contrastText,
    },
    iconsBox: {
      display: "flex",
      flexDirection: "row",
    },
    icon: {
      color: palette.primary.contrastText, //black
      fontSize: '20px'
    },
  };

  return (
    <Box
      sx={{
        // position: "fixed",
        bottom: 0,
        backgroundColor: palette.info.main,
        width: "100%",
        boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.2)",
        marginTop: "24px",
      }}
    >
      <Container>
        <Container sx={localTheme.firstContainer}>
          <NavigationButton path="/" img={logo} />
          <Box>
            <List sx={{ alignItems: "center" }}>
              {links.map((link) => (
                <NavigationButton
                  key={link.name}
                  path={link.route}
                  label={link.name}
                />
              ))}
            </List>
          </Box>
        </Container>

        <Divider />

        <Container sx={localTheme.secondContainer}>
          <Typography sx={localTheme.typo}>
            Copyright © 2023 All Rights Reserved
          </Typography>

          <Box sx={localTheme.iconsBox}>
            <IconButton>
              <InstagramIcon sx={localTheme.icon} />
            </IconButton>
            <IconButton>
              <FacebookIcon sx={localTheme.icon} />
            </IconButton>
            <IconButton>
              <XIcon sx={localTheme.icon} />
            </IconButton>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Footer;
