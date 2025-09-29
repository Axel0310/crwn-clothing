import { createContext, useReducer } from "react";
import {
  cartReducer,
  INITIAL_CART_STATE,
  CART_ACTION_TYPE,
} from "../reducers/cart-reducer/cart-reducer";
import {
  getCartTotalPrice,
  addToCart,
  removeFromCart,
  getTotalNumberOfItems,
  deleteFromCart,
} from "../helpers/cart.helper";
import { createAction } from "../helpers/reducer.helper";

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

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
  const { isCartDropdownDisplayed, cartItems } = state;

  const setCartItems = (updatedCartItems) => {
    const updatedCartCount = getTotalNumberOfItems(updatedCartItems);
    const updatedCartTotal = getCartTotalPrice(updatedCartItems);

    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: updatedCartItems,
        cartCount: updatedCartCount,
        cartTotalPrice: updatedCartTotal,
      })
    );
  };

  const setIsCartDropdownDisplayed = () => {
    dispatch(
      createAction(CART_ACTION_TYPE.TOGGLE_CART_DROPDOWN, {
        isCartDropdownDisplayed: !isCartDropdownDisplayed,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const updatedCartItems = addToCart(cartItems, productToAdd);
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (productId) => {
    const updatedCartItems = removeFromCart(cartItems, productId);
    setCartItems(updatedCartItems);
  };

  const deleteItemFromCart = (productId) => {
    const updatedCartItems = deleteFromCart(cartItems, productId);
    setCartItems(updatedCartItems);
  };

  const value = {
    ...state,
    setIsCartDropdownDisplayed,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
  };

  return <CartContext value={value}>{children}</CartContext>;
};
