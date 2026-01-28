import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [showToast, setShowToast] = useState(false)

    const addItem = (product, quantity) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id)
        

            if (existing) {
                return prevCart.map(item => 
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            }

            return [...prevCart, { ...product, quantity}]
        })

        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000)
    }

    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    }

    const clearCart = () => {
        setCart([])
        setShowToast(false)
    }

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            totalQuantity,
            totalPrice,
            showToast
        }}>
            {children}
        </CartContext.Provider>
    )
}