import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";


export { useCartContext } from "../../context/CartContext/useCartContext"

export const Cart = () => {
    const { cart, clearCart, deleteItem, totalPrice, checkout } = useCartContext();

    return (<section>
        <h2>Carrito de Compras</h2>

        {cart.length ? (
            cart.map((product) => (
                <Item key={product.id} item={product}>
                    <span>Cantidad: {product.quantity} </span>
                    <button onClick={() => deleteItem(product.id)}>
                        Eliminar
                    </button>
                </Item>
            ))
        ) : (
            <p> El carrito está vacío </p>
        )}

        {cart.length ? (
        <div>
            <div>
                <p>Total: U$S{totalPrice()}</p>
            </div>
            <button onClick={checkout} >
                Finalizar Compra
            </button>
            <button onClick={clearCart}>
                Vaciar Carrito
            </button>

        </div>
        ):(
           <Link to="/">
             Volver al Inicio
           </Link> 
        )}
    </section>
    );
};
