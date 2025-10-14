import { ItemList } from "../ItemList/ItemList";
export const ItemListContainer = ({ titulo, productos }) => {
    // estado

    //llamado a la base de datos (api o json local)

    return (
        <section>
            <h1>{titulo}</h1>
            <ItemList list={productos} />

        </section>

    );
};