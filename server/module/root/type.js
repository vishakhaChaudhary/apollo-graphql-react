const { gql } = require("apollo-server-express");

const { productType } = require("../product");

const root = gql`
  type Query {
    root: String
  }
`;

module.exports = {
    root,
    productType
}