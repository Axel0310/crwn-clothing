import { createContext, useReducer } from "react";
import { cartReducer, INITIAL_CART_STATE, CART_ACTION_TYPE } from "../reducers/cart-reducer/cart-reducer";

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
    // const [isCartDropdownDisplayed, setIsCartDropdownDisplayed] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    const [ state, dispatch ] = useReducer(cartReducer, INITIAL_CART_STATE);

    const toggleCartDropDown = () => {
        dispatch({type: CART_ACTION_TYPE.TOGGLE_CART_DROPDOWN});
    }

    const addItemToCart = (productToAdd) => {
        dispatch({type: CART_ACTION_TYPE.ADD_ITEM_TO_CART, payload: {productToAdd}});
    }

    const removeItemFromCart = (productId) => {
        dispatch({type: CART_ACTION_TYPE.REMOVE_ITEM_FROM_CART, payload: {productId: productId}});
    }

    const deleteItemFromCart = (productId) => {
        dispatch({type: CART_ACTION_TYPE.DELETE_ITEM_FROM_CART, payload: {productId: productId}});
    }

    // const cartCount = getTotalNumberOfItems(cartItems);
    // const cartTotalPrice = getCartTotalPrice(cartItems);

    const value = {...state, toggleCartDropDown, addItemToCart, removeItemFromCart, deleteItemFromCart };

    return (
        <CartContext value={value}>{children}</CartContext>
    )
}