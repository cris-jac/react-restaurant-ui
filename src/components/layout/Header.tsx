import logo from "./../../assets/LastLogo1.png"
import logoMini from "./../../assets/LastLogo3.png"
import { AppBar, Box, Container, List, Toolbar, useMediaQuery, useTheme } from "@mui/material"
import NavigationButton from "./NavigationButton"

const links = [
    { name: "Menu", route: "/menu" },
    { name: "Our story", route: "/about" },
    { name: "Contact", route: "/contact" },
    { name: "Login", route: "/login" }
]

const Header = () => {
    const { palette, breakpoints } = useTheme();
    const isSmScreen = useMediaQuery(breakpoints.down("sm"));

  return (
    <AppBar 
        position="static" 
        style={{ 
            backgroundColor: palette.info.main,
            paddingTop: '6px',
            paddingBottom: '6px',
            marginBottom: '48px',
            background: 'none'
        }}
    >
        <Container
        //  sx={{ background:"none" }}
         >
            <Toolbar sx={{ 
                display: 'flex', 
                alignItems:'space-center', 
                justifyContent: 'space-between',
                // background:"none"
            }} >
                <NavigationButton path="/" img={isSmScreen ? logoMini : logo} />

                <Box>
                    <List 
                        sx={{ alignItems: 'center' }}
                    >
                        {links.map((link) => (
                            <NavigationButton key={link.name} path={link.route} label={link.name} />
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </Container>
    </AppBar> 
  )
}

export default Header
