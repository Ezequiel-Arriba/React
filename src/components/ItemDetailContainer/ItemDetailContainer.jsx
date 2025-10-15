import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ }) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch("/data/productos.json")
            .then((res) => {
                if (!res.or) {
                    throw new Error("Error al cargar los productos");
                }

                return res.json();
            })

            .then((data) => {
                const found = data.find((p) => p.id === "3")
                if (found) {
                    setDetail(found);

                } else {
                    console.log("Producto no encontrado");
                }

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return <main>
        {Object.keys(detail).length ? (
            <ItemDetail detail={detail} />
        ) : (
            <p>Cargando...</p>
        )

        }
    </main>
};