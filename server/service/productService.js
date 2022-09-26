const { RESTDataSource } = require("apollo-datasource-rest");
const { ApolloError } = require("apollo-server-express");

class ProductService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `https://5fa0a1cfe21bab0016dfd30f.mockapi.io/products`;
    }

    /**
     * @desc Get Products Method to fetch all products 
     * @param {*} data 
     * @returns result Array of products
     */
    getProducts = async (data) => {
        try {
            const { search = '', sortBy="", order="", page, perPage } = data;
            this.baseURL = `${this.baseURL}?sortBy=${sortBy}&order=${order}&title=${search}&page=${page}&limit=${perPage}`
            const result = await this.get(this.baseURL);
            return result;
        } catch {
            throw new ApolloError(error);
        }
    }

    /**
     * @desc Get Product by Id method to fetch individual product details
     * @param {*} productId 
     * @returns result product details
     */
    getProductById = async (productId) => {
        try {
            const result = await this.get(`${this.baseURL}/${productId}`);
            return result;
        } catch {
            throw new ApolloError(error);
        }
    }

    /**
     * @desc Get Product Price Method to fetch the price of the individual product
     * @param {*} productId 
     * @returns 
     */
    getProductPrice = async (productId) => {
        try {
            const result = await this.get(`${this.baseURL}/${productId}/prices`);
            return result;
        } catch {
            throw new ApolloError(error);
        }
    }
}

module.exports = ProductService;
