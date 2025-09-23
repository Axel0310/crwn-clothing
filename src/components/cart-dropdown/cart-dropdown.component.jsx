import "./cart-dropdown.styles.scss";
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { use } from "react";
import { CartContext } from "../../context/cart.context.jsx";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, cartTotalPrice } = use(CartContext);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  }

  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <span>Total: {cartTotalPrice}€</span>
        </>
      ) : (
        <span className="empty-message">You have nothing in your cart</span>
      )}

      {cartItems.length ? <Button onClick={navigateToCheckout}>Got to checkout</Button> : null}
    </div>
  );
};

export default CartDropdown;
