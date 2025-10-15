import { Item } from "../Item/Item"

export const ItemDetail = ({ detail }) => {

    return (<Item item={detail}>
        <p>Children</p>
    </Item>
    );
}