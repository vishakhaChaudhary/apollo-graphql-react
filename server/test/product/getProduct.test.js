const { graphql }  = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { getProductSuccess } = require("./mockData/getProduct");
const { getProducts } = require("../lib/mock");
const { type } = require("../../module");

let executableSchema;
const typeDefs = [...Object.values(type)];

describe("Get Products", () => {
  beforeAll((done) => {
    executableSchema = makeExecutableSchema({
      typeDefs,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    });
    done();
  });

  describe("Success", () => {
    test("should pass if schema is valid", async (done) => {
        const { expected, query, queryName } = getProductSuccess;
        getProducts(executableSchema, expected);
        const result = await graphql(executableSchema, query);
        expect(result.data[queryName]).toEqual(expected);
        done();
    });
  });
});
