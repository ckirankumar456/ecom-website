import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectProduct } from "./SelectSlice";
import { iPhones } from "../iphones";
import { OnePluses } from "../OnePlus";
import { Gents } from "../imagedata";
import { AirpondsData } from "../airpondsdata";
import { Ladies } from "../dresswomen";
import { T_Shirt } from "../tShirts";
import { LaptopData } from "../laptopdata";
import { WatchesData } from "../watchesdata";
import { SandolsData } from "../sandolsdata";
import { Shoueses } from "../shousedata";
import { LadiesSarees } from "../ladiesSarees";
import { PantsData } from "../pantsdata";

function NavbarCom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SelectedAddToCart = useSelector((state) => state.addtocart.addSelected);
  const wishlist = useSelector((state) => state.wishlist.items);
  const products = {
    oneplusData: { product: OnePluses, name: "Oneplus" },
    iphoneData: { product: iPhones, name: "iPhones" },
    gentsData: { product: Gents, name: "Shirts" },
    airponeData: { product: AirpondsData, name: "AirPones" },
    dressData: { product: Ladies, name: "Dress" },
    tshirtData: { product: T_Shirt, name: "tShirts" },
    laptopData: { product: LaptopData, name: "Laptops" },
    watchData: { product: WatchesData, name: "Watches" },
    sandolsData: { product: SandolsData, name: "Sandols" },
    shoesData: { product: Shoueses, name: "Shoes" },
    sareesData: { product: LadiesSarees, name: "Sarees" },
    pantsData: { product: PantsData, name: "Pants" },
  };
  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (!value) return;
    const selectedProducts = Object.values(products).find(
      (p) => p.name === value
    );
    if (!selectedProducts) return;
    dispatch(SelectProduct(selectedProducts));
    navigate("/productdisplay");
  };

  return (
    <nav>
      <div className="nav_container">
        <div className="logo">
          <h1>Flipkart</h1>
          <h2>Explore Plus</h2>
        </div>
        <div className="location">
          <p>Delivery To Anywhere</p>
          <h3>
            <i className="fa-solid fa-location-dot"></i>
            Update location
          </h3>
        </div>
        <div className="search">
          <select defaultValue="" onChange={handleSelectChange}>
            <option value="" id="opt">
              -- Select a Product --
            </option>
            {Object.values(products).map((product) => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <h3>
            <i className="fa-solid fa-circle-user"></i>
            &nbsp; Kiran
          </h3>
          <div className="dropdown_content">
            <li>
              <i className="fa-solid fa-circle-user"></i> MY Profile
            </li>
            <li>
              <i className="fa-solid fa-box"></i> Order
            </li>
            <li>
              <i className="fa-solid fa-ticket-simple"></i> Coupons
            </li>
            <li>
              <i className="fa-solid fa-heart"></i> Wishlist {wishlist.length}
            </li>
            <li>
              <i className="fa-solid fa-bell"></i> Notification
            </li>
            <li>
              <i className="fa-solid fa-power-off"></i> Logout
            </li>
          </div>
        </div>
        <h3>Bcome a seller</h3>
        <div
          className="cart"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        >
          <h3>
            <i className="fa-solid fa-cart-shopping"></i>
            Cart {SelectedAddToCart.length}
          </h3>
        </div>
      </div>
    </nav>
  );
}

export default NavbarCom;
