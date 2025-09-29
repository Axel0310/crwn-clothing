import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { use } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
    const { setIsCartDropdownDisplayed, cartCount } = use(CartContext);

    return (
        <div onClick={setIsCartDropdownDisplayed} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    );
};

export default CartIcon;