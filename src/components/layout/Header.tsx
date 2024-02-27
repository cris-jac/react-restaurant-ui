import logo from "../../assets/Logo_2.png";
import logoMini from "../../assets/Logo_3.png";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
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
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import MenuIcon from "@mui/icons-material/Menu";
import { setShoppingCart } from "../../storage/redux/cartItemSlice";
import { useState } from "react";

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
  const { palette, breakpoints, typography } = useTheme();
  const isMdScreen = useMediaQuery(breakpoints.down("md"));

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
  const itemCount = shoppingCart
    ? shoppingCart.reduce(
        (sum: number, item: CartItemModel) => sum + item.quantity,
        0
      )
    : 0;

  // SideMenu
  const [isOpen, setIsOpen] = useState(false);

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
        {isMdScreen ? (
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "space-center",
              justifyContent: "space-between",
            }}
          >
            <NavigationButton path="/" img={logoMini} />

            <Box>
              <IconButton onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon />
              </IconButton>

              <Drawer
                open={isOpen}
                onClose={() => setIsOpen(!isOpen)}
                anchor="right"
              >
                <Box
                  padding={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    marginY={2}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton
                      onClick={handleThemeChange}
                      sx={{ margin: "auto" }}
                    >
                      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    {userData.id != "" && (
                      <NavLink to={userData.role == "admin" ? "/orders/allOrders" :"/orders/myorders"}>
                        <Button
                          startIcon={<ReceiptLongIcon />}
                          sx={{
                            fontSize: typography.h4,
                            textTransform: "none",
                            fontWeight: 500,
                          }}
                        >
                          Orders
                        </Button>
                      </NavLink>
                    )}

                    <NavLink to={"/shoppingCart"}>
                      <Button
                        startIcon={<ShoppingCartIcon />}
                        sx={{
                          fontSize: typography.h4,
                          textTransform: "none",
                          fontWeight: 500,
                          marginBottom: 2,
                        }}
                      >
                        Shopping Cart
                      </Button>
                    </NavLink>

                    <Divider />

                    <List
                      sx={{
                        alignItems: "left",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
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
                    {userData.id != "" ? (
                      <Button
                        startIcon={<NoAccountsIcon />}
                        onClick={handleLongout}
                        sx={{
                          fontSize: typography.h4,
                          textTransform: "none",
                          fontWeight: 500,
                        }}
                      >
                        Log out
                      </Button>
                    ) : (
                      <NavLink to={"/login"}>
                        <Button
                          startIcon={<AccountCircleIcon />}
                          sx={{
                            fontSize: typography.h4,
                            textTransform: "none",
                          }}
                        >
                          Log in
                        </Button>
                      </NavLink>
                    )}
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        ) : (
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "space-center",
              justifyContent: "space-between",
            }}
          >
            <NavigationButton path="/" img={logo} />

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
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Tooltip>
                {userData.id != "" && (
                  <Tooltip title="See my orders">
                    <NavLink to={userData.role == "admin" ? "/orders/allOrders" :"/orders/myorders"}>
                      <IconButton>
                        <ReceiptLongIcon />
                      </IconButton>
                    </NavLink>
                  </Tooltip>
                )}
                <Tooltip title="See shopping cart">
                  <NavLink to={"/shoppingCart"}>
                    <IconButton>
                      <Badge color="secondary" badgeContent={itemCount}>
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </NavLink>
                </Tooltip>
                <Tooltip title={userData.id != "" ? "Logout" : "Login"}>
                  {userData.id != "" ? (
                    <IconButton onClick={handleLongout}>
                      <NoAccountsIcon />
                    </IconButton>
                  ) : (
                    <NavLink to={"/login"}>
                      <IconButton>
                        <AccountCircleIcon />
                      </IconButton>
                    </NavLink>
                  )}
                </Tooltip>
              </Box>
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
