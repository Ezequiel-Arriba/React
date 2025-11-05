export const validateProducts = (product, fileRequired=true) => {
    const errors = {}

    if (!product.nbame.trim()) {
        errors.name = "Product name is required"
    }

    if(!producto.price )
}