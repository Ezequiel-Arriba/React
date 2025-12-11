const BASE_URL = "https://6900bba9ff8d792314bb330b.mockapi.io/Products";

// crear producto
export const createProduct = async (product) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(product)
    });
    
    if (!response.ok) {
        throw new Error("Failed to create product");
    }

    const result = await response.json();
    return result;
};


// para buscar por categoria
export const getProducts = async (category) => {
    let url = BASE_URL;
    if (category) {
        url = `${BASE_URL}?category=${category}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Categoria no encontrada");
    }

    const result = await response.json();
    return result;
}


// para buscar por id

export const getProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error("Producto no encontrado");
    }
    return await response.json();
};