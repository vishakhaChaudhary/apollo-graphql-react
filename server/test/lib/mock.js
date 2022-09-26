const { addMockFunctionsToSchema } = require("graphql-tools");

const getProducts = (schema, expected) => {
  addMockFunctionsToSchema({
    schema,
    mocks: {
      GetProductListResponse: () => expected,
    },
  });
};

const getProductById = (schema, expected) => {
  addMockFunctionsToSchema({
    schema,
    mocks: {
      GetProductResponse: () => expected,
    },
  });
};

module.exports = {
    getProducts,
    getProductById
}
