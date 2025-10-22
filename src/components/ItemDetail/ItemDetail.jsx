import { Item } from "../Item/Item"

export const ItemDetail = ({ detail }) => {

    return (<Item item={detail}>
        <button>Agregar al carrito</button>
    </Item>
    );
}