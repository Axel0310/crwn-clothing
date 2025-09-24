import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-row/checkout-item.component";
import { use } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, cartTotalPrice } = use(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block"><span>Product</span></div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block"><span>Remove</span></div>
      </div>
      {cartItems &&
        cartItems.map((item) => {
          return (
            <CheckoutItem item={item} key={item.id}/>
          );
        })}
        <span className="total">Total: {cartTotalPrice}€</span>
    </div>
  );
};

export default Checkout;