import { useDispatch, useSelector } from "react-redux";
import { SelectedAddtoCart, RemoveFromCart } from "./AddToCartSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PriceDisplay() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickedItem = useSelector((state) => state.selected.clickedItem);
  const cartItems = useSelector((state) => state.addtocart.addSelected);
  const [addedToCart, setAddedToCart] = useState(false);
  useEffect(() => {
    setAddedToCart(false);
  }, [clickedItem]);
  if (!clickedItem) return null;
  function handleAddToCart() {
    if (!addedToCart) {
      dispatch(SelectedAddtoCart(clickedItem));
      setAddedToCart(true);
    }
  }
  function handleGoToCart() {
    navigate("/cart");
  }
  function handleDeleteItems(item) {
    dispatch(RemoveFromCart(item));
  }
  return (
    <>
      <div className="price_Details">
        <div className="detail_img">
          <img src={clickedItem.image} alt="Product" />
          <i className="bi bi-heart"></i>
          <br />
          <div className="button_group">
            <button
              id="btn2"
              onClick={addedToCart ? handleGoToCart : handleAddToCart}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {addedToCart ? "Go to Cart" : "Add Cart"}
            </button>
            <button id="btn1">
              <i className="fa-solid fa-bolt-lightning"></i>
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <p>{clickedItem.company}</p>
          <h3>{clickedItem.description}</h3>
          <h4>
            ₹{clickedItem.price}&nbsp;&nbsp;
            <span>₹{clickedItem.pastPrice}</span>&nbsp;&nbsp;
            <h5> {clickedItem.offer}</h5>
          </h4>
          <div className="first_container">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceDisplay;
