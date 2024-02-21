import { Button, useMediaQuery, useTheme } from "@mui/material"
import { NavLink } from "react-router-dom"


interface Props {
    path: string;
    label?: string;
    img?: any;
}

const NavigationButton = ({ path, label, img }: Props) => {

    // Styling
    const theme = useTheme();
    const h5 = theme.typography.h5;
    const h3 = theme.typography.h3;
    const textColor = theme.palette.primary.contrastText;
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
    
    const localStyle = {
        button: {
            mx: 1, 
            textTransform: 'capitalize',
            color: textColor,
            fontSize: isSmScreen ? h5 : h3,
            padding: '6px',
            ":hover": {
                color: 'palette.text.secondary'
            }
        }
    }

  return (
    <NavLink to={path}>
        <Button size="small" sx={localStyle.button}>
            {img ? 
            <img src={img} height={60} /> : 
            label}
        </Button>
    </NavLink>
  )
}

export default NavigationButton