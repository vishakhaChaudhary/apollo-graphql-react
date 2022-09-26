const ProductService = require("./productService");

const getService = () => ({
    product: new ProductService()
});

module.exports = {
    getService
}
