const getProductIndex = (cartItems, productId) => {
    return cartItems.findIndex((item) => item.id === productId);
}

const updateProductQuantity = (cartItems, productIndex, shouldIncrease) => {
    const existingProduct = cartItems[productIndex];
    cartItems[productIndex] = {...existingProduct, quantity: shouldIncrease ? existingProduct.quantity + 1 : existingProduct.quantity - 1};
}

export const addToCart = (cartItems, productToAdd) => {
    const updatedCartItems = [...cartItems];
    const productIndex = getProductIndex(updatedCartItems, productToAdd.id);
    if(productIndex !== -1){
        updateProductQuantity(updatedCartItems, productIndex, true);
    } else {
        updatedCartItems.push({...productToAdd, quantity: 1});
    }
    return updatedCartItems;
}

export const deleteFromCart = (cartItems, productId) => {
    return cartItems.filter((item) => item.id !== productId);
}

export const removeFromCart = (cartItems, productId) => {
    const productIndex = getProductIndex(cartItems, productId);
    if(cartItems[productIndex].quantity === 1) {
        return deleteFromCart(cartItems, productId);
    }
    
    const updatedCartItems = [...cartItems];

    updateProductQuantity(updatedCartItems, productIndex, false);
    return updatedCartItems;
}

export const getTotalNumberOfItems = (cartItems) => {
    return cartItems.reduce((nb, item) => {
        return nb + item.quantity;
    }, 0)
}

export const getCartTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0)
}

export const getItemSubTotalPrice = (item) => {
    return item.quantity * item.price;
}