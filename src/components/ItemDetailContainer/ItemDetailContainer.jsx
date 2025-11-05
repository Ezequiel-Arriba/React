import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



export const ItemDetailContainer = ({ titulo }) => {
    const [detail, setDetail] = useState({});

    const { id } = useParams()
    const parsedId = parseInt(id);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al cargar los productos");
                }

                return res.json();
            })

            .then((data) => {
                
                const found = data.find((p) => p.id === parsedId);
                if (found) {
                    setDetail(found);

                } else {
                    console.log("Producto no encontrado");
                }

            })
            .catch((err) => {
                console.log(err);
            });
    }, [parsedId]);

    return <main>
        <section>
        <h1> {titulo} </h1>
        
        {Object.keys(detail).length ? (
            <ItemDetail detail={detail} 
            />
        ) : (
            <p>Cargando...</p>
        )

        }
        </section>
    </main>
};