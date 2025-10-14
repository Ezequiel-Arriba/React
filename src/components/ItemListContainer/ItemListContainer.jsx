// estado

//llamado a la base de datos (api o json local)


import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al cargar los productos");
                }

                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })

            .catch((err) => {
                console.log(err);
            });
    }, []);



    return (
        <section>
            <h1>{titulo}</h1>
            <ItemList list={products} />

        </section>

    );
};