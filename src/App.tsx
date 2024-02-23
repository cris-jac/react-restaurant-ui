// import './App.css'
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Login, Menu, MenuItemDetails, NotFound, Register, ShoppingCart } from "./pages";
import { Footer, Header } from "./components/layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useGetShoppingCartQuery } from "./api/shoppingCartApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart } from "./storage/redux/cartItemSlice";
import { RootState } from "./storage/redux/store";
import UserModel from "./interfaces/UserModel";
import { jwtDecode } from "jwt-decode";
import { setLoggedInUser } from "./storage/redux/userAuthSlice";
import { useGetMenuItemsQuery } from "./api/menuItemApi";
import { setMenuItems } from "./storage/redux/menuItemSlice";

function App() {
  const paletteType = theme('light')
  
  // hook - dispatch
  const dispatch = useDispatch();

  // Store Get User
  const userData: UserModel = useSelector((state: RootState) => state.userAuthStore);

  // // 1 - Worked with hardcoded userId, but no with userData
  // // User Id hardcoded 
  // // const userId = "abd83cf0-2b6a-49a9-9965-568ec7d4cdf3";
  // // Api Get shopping cart
  // const { data: cartData, isLoading: cartLoading } = useGetShoppingCartQuery(userData.id);

  // // Store Set shopping cart
  // useEffect(() => {
  //   if (!cartLoading) {
  //     dispatch(setShoppingCart(cartData.result.cartItems));
  //   }
  // }, [cartData])

  // 2 - Worked with hardcoded userId, but no with userData
  // Store Set user data
  useEffect(() => {
    // local storage get token
    const localToken = localStorage.getItem("token");
    if (localToken) {
      // destructure token from local storage
      const { id, fullName, email, role }: UserModel = jwtDecode(localToken);
      // state set user data
      dispatch(setLoggedInUser({ id, fullName, email, role }));
    }
  }, [userData])    // Called with userData
  
  // Api Get shopping cart
  const { data: cartData, isLoading: cartLoading } = useGetShoppingCartQuery(userData.id);
  // Store Set shopping cart
  useEffect(() => {
    // If there is userData
    if (userData && userData.id) {
      if (!cartLoading) {
        // State set cart
        if (cartData.result != null) {
          dispatch(setShoppingCart(cartData.result.cartItems));
        } else {
          dispatch(setShoppingCart([]));
        }

      }
    }
  }, [cartData])

  // Api Get Items
  const { data: itemsData, isLoading: itemsLoading } = useGetMenuItemsQuery(null);
  // State Set Items
  useEffect(() => {
    if (!itemsLoading) {
      if (itemsData) {
        // State Set Items
        dispatch(setMenuItems(itemsData.result))
      }
    }
  }, [itemsData])




  return (
    <ThemeProvider theme={paletteType}>
      <CssBaseline/>
      <Header />
      <div style={{
        minHeight: '100vh'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App
