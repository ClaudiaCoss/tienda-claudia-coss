import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            const cartUpdated = cart.map((prod) =>
                prod.id === item.id
                    ? { ...prod, quantity: prod.quantity + cantidad }
                    : prod
            );
            setCart(cartUpdated);
        } else {
            // Si no está, lo agrega al carrito
            setCart([...cart, { ...item, quantity: cantidad }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };


    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0);
    }

    const cartTotal =()=>{
        return cart.reduce((acc, item)=> acc += item.price * item.quantity,0);
    }






    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};