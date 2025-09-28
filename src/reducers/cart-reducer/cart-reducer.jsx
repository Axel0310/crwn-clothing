import { getCartTotalPrice, addToCart, removeFromCart, getTotalNumberOfItems, deleteFromCart } from "../../helpers/cart.helper"

export const CART_ACTION_TYPE = {
    TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
    DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
}

export const INITIAL_CART_STATE = {
    isCartDropdownDisplayed: false,
    cartItems: [],
    cartCount: 0,
    cartTotalPrice: 0,
}

export const cartReducer = (state, action) => {
    const { type, payload} = action;
    switch(type) {
        case "TOGGLE_CART_DROPDOWN":
            return {
                ...state,
                isCartDropdownDisplayed: !state.isCartDropdownDisplayed,
            }
        case "ADD_ITEM_TO_CART":
            {const updatedCartItems = addToCart(state.cartItems, payload.productToAdd);
            return {
                ...state,
                cartItems: updatedCartItems,
                cartCount: getTotalNumberOfItems(updatedCartItems),
                cartTotalPrice: getCartTotalPrice(updatedCartItems),
            }}
        case "REMOVE_ITEM_FROM_CART":
            {const updatedCartItems = removeFromCart(state.cartItems, payload.productId);
            return {
                ...state,
                cartItems: updatedCartItems,
                cartCount: getTotalNumberOfItems(updatedCartItems),
                cartTotalPrice: getCartTotalPrice(updatedCartItems),
            }}
        case "DELETE_ITEM_FROM_CART":
            {const updatedCartItems = deleteFromCart(state.cartItems, payload.productId);
            return {
                ...state,
                cartItems: updatedCartItems,
                cartCount: getTotalNumberOfItems(updatedCartItems),
                cartTotalPrice: getCartTotalPrice(updatedCartItems),
            }}
        default:
            throw new Error(`Error caused by unhandled type ${type} in cart reducer`);
    }
}