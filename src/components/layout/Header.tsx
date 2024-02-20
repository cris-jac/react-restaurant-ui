import logo from "/images/LastLogo2.png"
import { AppBar, Box, Container, List, Toolbar } from "@mui/material"
import NavigationButton from "./NavigationButton"

const links = [
    { name: "Menu", route: "/menu" },
    { name: "Our story", route: "/about" },
    { name: "Contact", route: "/contact" },
    { name: "Login", route: "/login" }
]

const Header = () => {
  return (
    <AppBar 
        position="static" 
        style={{ 
            // backgroundColor: 'rgba(0,0,0,0.2)',
            paddingTop: '6px',
            paddingBottom: '6px',
            marginBottom: '48px'
        }}
    >
        <Container>
            <Toolbar sx={{ 
                display: 'flex', 
                alignItems:'space-center', 
                justifyContent: 'space-between'
            }} >
                <NavigationButton path="/" img={logo} />
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
