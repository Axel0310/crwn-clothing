import { createContext, useState } from "react";
import { addToCart, getTotalNumberOfItems, getCartTotalPrice, removeFromCart, deleteFromCart } from "../helpers/cart.helper";


export const CartContext = createContext({
    isCartDropdownDisplayed: false,
    toggleCartDropDown: null,
    cartItems: [],
    addItemToCart: null,
    removeItemFromCart: null,
    deleteItemFromCart: null,
    cartCount: 0,
    cartTotalPrice: 0,
});

export const CartProvider = ({children}) => {
    const [isCartDropdownDisplayed, setIsCartDropdownDisplayed] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleCartDropDown = () => {
        setIsCartDropdownDisplayed(!isCartDropdownDisplayed);
    }

    const addItemToCart = (productToAdd) => {
        setCartItems(addToCart(cartItems, productToAdd));
    }

    const removeItemFromCart = (productId) => {
        setCartItems(removeFromCart(cartItems, productId))
    }

    const deleteItemFromCart = (productId) => {
        setCartItems(deleteFromCart(cartItems, productId))
    }

    const cartCount = getTotalNumberOfItems(cartItems);
    const cartTotalPrice = getCartTotalPrice(cartItems);

    const value = {isCartDropdownDisplayed, toggleCartDropDown, cartItems, addItemToCart, removeItemFromCart, deleteItemFromCart, cartCount, cartTotalPrice};

    return (
        <CartContext value={value}>{children}</CartContext>
    )
}