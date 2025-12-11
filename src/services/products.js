const BASE_URL = "https://6900bba9ff8d792314bb330b.mockapi.io/Products";

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

