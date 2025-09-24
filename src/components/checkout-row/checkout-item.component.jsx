import "./checkout-item.styles.scss";
import { use } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ item }) => {
  const { id, imageUrl, name, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } = use(CartContext);

  const handleIncreaseItem = () => addItemToCart(item);
  const handleDecreaseItem = () => removeItemFromCart(id);
  const handleDeleteItem = () => deleteItemFromCart(id);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecreaseItem}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div className="arrow" onClick={handleIncreaseItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}€</span>
      <div className="remove-button" onClick={handleDeleteItem}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
