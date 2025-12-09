import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])



    const existsInCart = (id) => {
        const existsInCart = cart.some((p) => p.id === id);
        return existsInCart;
    };

    const addItem = (item) => {
        if (existsInCart(item.id)) {
            //map para recorrer el carrito y ver si existe
            const updatedCart = cart.map((p) => {
                if (p.id === item.id) {

                    return { ...p, quantity: p.quantity + item.quantity };
                } else {
                    return p;
                }

            });
            setCart(updatedCart);
            alert(`Se agregaron ${item.quantity} unidades de ${item.name} al carrito`);
        } else {

            setCart([...cart, item]);
            alert(`${item.name} agregado al carrito`);
        }
    };

    const deleteItem = (id) => {
        const cartFilter = cart.filter((p) => p.id !== id);
        setCart(cartFilter);
        alert("Producto eliminado del carrito");
    }


    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
        return totalItems;
    };

    const totalPrice = () => {
        const total = cart.reduce((acc, product) => acc + product.quantity * product.price, 0);
        return Math.round(total * 100) / 100;
    }

    const checkout = () => {
        const order = confirm("Desea finalizar su compra?");
        if (order) {
            clearCart();
            alert("Gracias por su compra!");
        } else {
            alert("Puede seguir comprando");
        }
    }

    console.log(cart);
    const values = { cart, addItem, clearCart, getTotalItems, deleteItem, totalPrice, checkout };

    return <CartContext.Provider value={values}>
        {children}

    </CartContext.Provider>
}
