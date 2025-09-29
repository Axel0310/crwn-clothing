export const CART_ACTION_TYPE = {
    TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
    SET_CART_ITEMS: "SET_CART_ITEMS",
}

export const INITIAL_CART_STATE = {
    isCartDropdownDisplayed: false,
    cartItems: [],
    cartCount: 0,
    cartTotalPrice: 0,
}

export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case "TOGGLE_CART_DROPDOWN":
            return {
                ...state,
                isCartDropdownDisplayed: payload.isCartDropdownDisplayed,
            }
        case "SET_CART_ITEMS":
            return {
                isCartDropdownDisplayed: state.isCartDropdownDisplayed,
                ...payload
            }
        default:
            throw new Error(`Error caused by unhandled type ${type} in cart reducer`);
    }
}