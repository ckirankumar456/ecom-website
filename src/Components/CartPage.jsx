import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "./AddToCartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addtocart.addSelected);

  if (cartItems.length === 0) return;

  return (
    <div className="cart_page">
      <h2>My Cart </h2>
      {cartItems.map((item, index) => (
        <div className="cart_item" key={index}>
          <img src={item.image} alt={item.description} />
          <p>{item.description}</p>
          <strong>₹{item.price}</strong>
          <button>Buy</button>
          <button onClick={() => dispatch(RemoveFromCart(item))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
