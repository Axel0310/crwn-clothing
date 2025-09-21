import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { use } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
    const { toggleCartDropDown } =use(CartContext);

    return (
        <div onClick={toggleCartDropDown} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;