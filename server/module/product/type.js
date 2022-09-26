const { gql } = require("apollo-server-express");
const query = require("./documentation/query");

const { getProduct, getProducts } = query;
const { response: { data }} = getProduct;

const type = gql`
    extend type Query {
        "${getProducts.description}" getProducts(input: FilterParams): GetProductListResponse
        "${getProduct.description}" getProductById(input: GetProductId!): GetProductResponse
    }

    input GetProductId {
        id: String
    }

    input FilterParams {
        sortBy: String,
        order: String,
        search: String,
        page: Int,
        perPage: Int
    }

    type GetProductResponse {
        data: ProductSchema,
        "${getProduct.response.error}" error: String,
        "${getProduct.response.status}" status: String
    }

    type GetProductListResponse {
        data: Products,
        "${getProduct.response.error}" error: String,
        "${getProducts.response.status}" status: String
    }

    type Products {
        "${getProducts.response.data.count}" count: Int,
        "${getProducts.response.data.items}" items: [ProductSchema]
    }

    type ProductSchema {
        "${data.id}" id: String,
        "${data.title}" title: String,
        "${data.description}" description: String,
        "${data.material}" material: String,
        "${data.color}" color: String,
        "${data.image}" image: String,
        "${data.release_date}" release_date: String,
        "${data.price}" price: String
    }
`;

module.exports = type;
