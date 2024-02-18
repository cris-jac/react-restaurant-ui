import logo from "/images/Logo2.png"
import { AppBar, Box, Container, List, Toolbar } from "@mui/material"
import HeaderButton from "./HeaderButton"

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
            paddingBottom: '6px' 
        }}
    >
        <Container>
            <Toolbar sx={{ 
                display: 'flex', 
                alignItems:'space-center', 
                justifyContent: 'space-between'
            }} >
                <HeaderButton path="/" img={logo} />
                <Box>
                    <List 
                        sx={{ alignItems: 'center' }}
                    >
                        {links.map((link) => (
                            <HeaderButton key={link.name} path={link.route} label={link.name} />
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </Container>
    </AppBar> 


    // <div>
    //     <nav 
    //         className="navbar navbar-expand-md" 
    //         style={{ 
    //             backgroundColor: 'rgba(0, 0, 0, 0.2)',
    //             // display: "flex",
    //             // flexDirection: 'row',
    //             // alignContent: 'space-around',
    //             padding: '10px 30px',
    //             gap: '50px'
    //         }}
    //     >
    //         <div 
    //         className="container-fluid d-flex justify-content-between align-items-center"
    //         // style={{ 
    //         //     display: 'flex',
    //         //     flexDirection: 'row',
    //         //     alignContent: 'space-between'
    //         //  }}
    //         >
    //             <NavLink className="nav-link" to="/">
    //                 <img src={logo} alt="" className="m-1" style={{ height: "50px" }} />
    //             </NavLink>

    //             <button 
    //                 className="navbar-toggler" 
    //                 type="button" 
    //                 data-bs-toggle="collapse" 
    //                 data-bs-target="#navbarSupportedContent" 
    //                 aria-controls="navbarSupportedContent" 
    //                 aria-expanded="false" 
    //                 aria-label="Toggle navigation"
    //             >
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse">
    //                 <ul 
    //                     className="navbar-nav "
    //                     // style={{ 
    //                     //     display: 'flex',
    //                     //     flexDirection: 'row',
    //                     //     alignContent: 'end'
    //                     // }}
    //                 >
    //                     {links.map((link, index) => (
    //                         <li className="nav-item" key={index}>
    //                             <NavLink className="nav-link" to={link.route}>
    //                                 {link.name}
    //                             </NavLink>
    //                         </li>
    //                     ))}
    //                 </ul>

    //             </div>

    //             {/* <div
    //                 style={{ 
    //                     display: 'flex',
    //                     flexDirection: 'row',
    //                     alignContent: 'space-around' ,
    //                     width: '100%'
    //                 }}
    //             >
    //                 {links.map((link, index) => (
    //                     <NavLink className="nav-link" to={link.route} key={index}>
    //                         {link.name}
    //                     </NavLink>
    //                 ))}
    //             </div>
    //              */}


    //             {/* <div className="nav-item"> */}
    //                 {/* <NavLink className="nav-link" to="/login" >Login</NavLink> */}
    //             {/* </div> */}
    //         </div>




    //     </nav>
    // </div>
  )
}

export default Header
