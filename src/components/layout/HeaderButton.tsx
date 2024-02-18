import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"

const localStyle = {
    button: {
        mx: 1, 
        textTransform: 'capitalize',
        color: '#fff',
        // backgroundColor: 'palette.primary',
        fontSize: '18px',
        padding: '6px',
        ":hover": {
            color: 'palette.text.secondary'
        }
    }
}

interface Props {
    path: string;
    label?: string;
    img?: any;
}

const HeaderButton = ({ path, label, img }: Props) => {
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

export default HeaderButton