export const getFilteredProducts = (filters, products) => {
    const filteredProducts = products.filter((product) => {
        // Filter by price range
        const withinPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

        // Filter by colors
        const matchesColor = filters.colors.length === 0 || filters.colors.some((color) => product.colors.includes(color));

        // Filter by sizes
        const matchesSize = filters.sizes.length === 0 ||  filters.sizes.some((size) => product.sizes.includes(size));

        return withinPriceRange && matchesColor && matchesSize;
    });

    return filteredProducts;
}