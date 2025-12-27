import { useDispatch, useSelector } from "react-redux";
import { SetClickedItem } from "./SelectSlice";
import { useState } from "react";
import { addToWishlist, removeFromWishlist } from "./WishlistSlice";
import { useNavigate } from "react-router-dom";

function ProductDisplay() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectProduct = useSelector((state) => state.selected.select);
  const wishlist = useSelector((state) => state.wishlist.items);
  const [heartedItems, setHeartedItems] = useState({});
  const products = selectProduct?.product || [];
  function ClickById(item) {
    dispatch(SetClickedItem(item));
    navigate("/pricedisplay");
  }
  function toggleHeart(index) {
    setHeartedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }
  const handleHeartClick = (item) => {
    const itemExists = wishlist.find((wish) => wish.id === item.id);
    if (itemExists) dispatch(removeFromWishlist(item));
    else dispatch(addToWishlist(item));
  };
  return (
    <div className="manShirts">
      {products.map((item, index) => (
        <div
          className="man_container box"
          key={index}
          onClick={() => ClickById(item)}
        >
          <img src={item.image} alt="" />
          <p>
            {item.company}
            <i
              className="bi"
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
                toggleHeart(index);
                handleHeartClick(item);
              }}
            >
              {heartedItems[index] ? "❤️" : "🤍"}
            </i>
          </p>
          <h3>{item.description}</h3>
          <h4>
            ₹{item.price} <span>₹{item.pastPrice}</span> <h5>{item.offer}</h5>
          </h4>
          <p>free delivery</p>
        </div>
      ))}
    </div>
  );
}

export default ProductDisplay;
