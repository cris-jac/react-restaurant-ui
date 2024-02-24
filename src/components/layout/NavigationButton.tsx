import { Button, Typography, useMediaQuery, useTheme } from "@mui/material"
import { NavLink } from "react-router-dom"


interface Props {
    path: string;
    label?: string;
    img?: any;
}

const NavigationButton = ({ path, label, img }: Props) => {

    // Styling
    const { palette, typography, breakpoints } = useTheme();
    const h6 = typography.h6;
    const h4 = typography.h4;
    const textColor = palette.primary.contrastText;
    const isSmScreen = useMediaQuery(breakpoints.down("sm"));
    
    const localStyle = {
        button: {
            mx: 1, 
            textTransform: 'capitalize',
            color: textColor,
            padding: '6px',
            ":hover": {
                color: palette.secondary.contrastText,
                backgroundColor: 'rgba(0,0,0,0)',
            }
        },
        label: {
            fontSize: isSmScreen ? h6 : h4,
        }
    }

  return (
    <NavLink to={path}>
        <Button size="small" sx={localStyle.button}>
            {img ? 
            <img src={img} height={60} /> : 
            <Typography sx={localStyle.label}>{label}</Typography>}
        </Button>
    </NavLink>
  )
}

export default NavigationButton