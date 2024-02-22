// import './App.css'
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Login, Menu, MenuItemDetails, NotFound, Register, ShoppingCart } from "./pages";
import { Footer, Header } from "./components/layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useGetShoppingCartQuery } from "./api/shoppingCartApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShoppingCart } from "./storage/redux/cartItemSlice";

function App() {
  const paletteType = theme('dark')
  
  const dispatch = useDispatch();

  // User Id hardcoded 
  const userId = "abd83cf0-2b6a-49a9-9965-568ec7d4cdf3";
  // Api Get shopping cart
  const { data: cartData, isLoading: cartLoading } = useGetShoppingCartQuery(userId);
  // Store Set shopping cart
  useEffect(() => {
    if (!cartLoading) {
      dispatch(setShoppingCart(cartData.result.cartItems));
    }
  }, [cartData])


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
