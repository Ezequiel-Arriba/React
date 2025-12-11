

export const validateProduct = (product, fileRequired = true) => {
    const errors = {}

    if (!product.name.trim()) {
        errors.name = "Product name is required"
    }

    if (!product.description.trim()) {
        errors.description = "Product description is required"
    }

    if (!product.price || product.price <= 0) {
        errors.price = "Product price must be greater than zero";
    }

    if (!product.category.trim()) {
        errors.category = "Product category is required"
    }

    if (fileRequired && !product.file) {
        errors.file = "Product image file is required";
    }
    return errors;
}; 