import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartDropdownDisplayed: false,
    toggleCartDropDown: null
});

export const CartProvider = ({children}) => {
    const [isCartDropdownDisplayed, setIsCartDropdownDisplayed] = useState(false);

    const toggleCartDropDown = () => {
        setIsCartDropdownDisplayed(!isCartDropdownDisplayed);
    }

    const value = {isCartDropdownDisplayed, toggleCartDropDown};

    return (
        <CartContext value={value}>{children}</CartContext>
    )
}