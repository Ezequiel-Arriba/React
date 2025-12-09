import { useCartContext } from "../../context/CartContext/useCartContext"
import { Item } from "../Item/Item"
import { Counter } from "../Counter/Counter"

export const ItemDetail = ({ detail }) => {
    const {addItem} = useCartContext()

    const handleAddItem = (quantity) => {
        addItem({...detail, quantity}) ;
    };
    

    return (<Item item={detail}>

        <p>Descripción: {detail.description}</p>
        <p>Categoría: {detail.category}</p>

        <Counter btnText={"Agregar al Carrito"} onConfirm={handleAddItem}/>

        
    </Item>
    );
}