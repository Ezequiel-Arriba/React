import { Item } from "../Item/Item"

export const ItemList = ({ list }) => {
    return (
        <>
            {list.length ?(
                list.map((prod) => <Item key={prod.id} item={prod}>
                    <button>Agregar al carrito</button>
                </Item>
                )
                ) : (
                    <p>No hay productos</p>
                )}

        </>
    )
}