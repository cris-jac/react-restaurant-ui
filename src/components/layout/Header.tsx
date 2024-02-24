import logo from "./../../assets/LastLogo1.png";
import logoMini from "./../../assets/LastLogo3.png";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  List,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationButton from "./NavigationButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../storage/redux/store";
import UserModel from "../../interfaces/UserModel";
import { NavLink, useNavigate } from "react-router-dom";
import { CartItemModel } from "../../interfaces";
import {
  initialUserState,
  setLoggedInUser,
} from "../../storage/redux/userAuthSlice";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { setShoppingCart } from "../../storage/redux/cartItemSlice";

const middleLinks = [
  { name: "Menu", route: "/menu" },
  { name: "Our story", route: "/about" },
  { name: "Contact", route: "/contact" },
];

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}


const Header = ({ handleThemeChange, darkMode }: Props) => {
  // Styling
  const { palette, breakpoints } = useTheme();
  const isSmScreen = useMediaQuery(breakpoints.down("sm"));

  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State auth get
  const userData: UserModel = useSelector(
    (state: RootState) => state.userAuthStore
  );

  // State cart get
  const shoppingCart: CartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  // handleLogout
  const handleLongout = () => {
    // remove token from storage
    localStorage.removeItem("token");
    // state userAuth set to initial
    dispatch(setLoggedInUser({ ...initialUserState }));
    // state cart set to initial
    dispatch(setShoppingCart([]));
    // nav to home
    navigate("/");
  };

    // Badge count
    const itemCount = shoppingCart ? shoppingCart.reduce((sum: number, item: CartItemModel) => sum + item.quantity, 0) : 0;

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: palette.info.main,
        paddingTop: "6px",
        paddingBottom: "6px",
        marginBottom: "48px",
        background: "none",
      }}
    >
      <Container
      //  sx={{ background:"none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "space-center",
            justifyContent: "space-between",
            // background:"none"
          }}
        >
          <NavigationButton path="/" img={isSmScreen ? logoMini : logo} />

          <Box>
            <List sx={{ alignItems: "center" }}>
              {middleLinks.map((link) => (
                <NavigationButton
                  key={link.name}
                  path={link.route}
                  label={link.name}
                />
              ))}
            </List>
          </Box>

          <Box>
            <Tooltip title="Change mode">
                <IconButton onClick={handleThemeChange}>
                    { darkMode ? (
                        <Brightness7Icon />
                        ) : (
                        <Brightness4Icon />
                    )}
                </IconButton>
            </Tooltip>
            <Tooltip title="See shopping cart">
              <NavLink to={"/shoppingCart"}>
                <IconButton>
                <Badge color="secondary" badgeContent={itemCount}>
                  <ShoppingCartIcon />
                </Badge>
                </IconButton>
              </NavLink>
            </Tooltip>
            <Tooltip title={(userData.id!="") ? "Logout" : "Login"}>
                {(userData.id!="") ? (
              <IconButton onClick={handleLongout}>
                <NoAccountsIcon />  
              </IconButton> ):(
                <NavLink to={"/login"}>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </NavLink>
              )}
            </Tooltip>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
