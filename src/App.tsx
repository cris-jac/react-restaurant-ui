// import './App.css'
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Login, Menu, MenuItemDetails, NotFound, Register, ShoppingCart } from "./pages";
import { Footer, Header } from "./components/layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  const paletteType = theme('dark')

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
