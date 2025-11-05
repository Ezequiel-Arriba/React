import { Item } from "../Item/Item"

export const ItemDetail = ({ detail }) => {

    return (<Item item={detail}>

        <p>Descripción:
            {detail.description}</p>
        <p>Categoría: {detail.category}</p>

        <button>Agregar al carrito</button>
    </Item>
    );
}