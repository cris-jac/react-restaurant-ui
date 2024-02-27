import { Box, Button, Typography, useTheme } from "@mui/material"
import image from "../../../assets/evelyn-semenyuk-djVKFrCCTkI-unsplash.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const { palette } = useTheme();

  return (
    <Box 
        height="650px"
        sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            ":before": {
                content: '""',
                position: "absolute",
                top: -46,
                left: 0,
                width: "100%",
                height: "108%",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(150%) contrast(150%) brightness(40%)",
                zIndex: -1,
            }
        }}
    >
        <Typography variant="h1" paddingX={2} marginBottom={18} align="center" color="white">
            Welcome to Hojas Verdes
            </Typography>
        <Typography variant="subtitle2" paddingX={2} marginY={2} align="center" color="white">
            A vegetarian restaurant with diverse plant-based dishes
        </Typography>
        <Link to="/menu">
            <Button 
                sx={{
                    border: "2px solid",
                    borderRadius: '1px',
                    marginTop: 3,
                    paddingX: 3,
                    borderColor: palette.text.secondary,
                    color: palette.text.secondary,
                    bgcolor: palette.info.light,
                    ":hover": {
                      color: palette.info.light,
                      bgcolor: palette.text.secondary,
                    }
                  }}
            >
                See our dishes!
            </Button>
        </Link>
    </Box>
  )
}

export default HeroSection