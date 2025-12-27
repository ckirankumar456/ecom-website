import "../src/EcomWeb.css";
import NavbarCom from "./Components/NavbarCom";
import ProductDisplay from "./Components/ProductDisplay";
import PriceDisplay from "./Components/PriceDisplay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarCom />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productdisplay" element={<ProductDisplay />} />
          <Route path="/pricedisplay" element={<PriceDisplay />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      {/* <HeaderCom />
      <HeaderCarousel />
      <PriceDisplay />
      <FooterCom /> */}
    </>
  );
}

export default App;
