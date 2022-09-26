const { graphql }  = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { getProductByIdSuccess, getProductByIdFailure } = require("./mockData/getProductById");
const { getProductById } = require("../lib/mock");
const { type } = require("../../module");

let executableSchema;
const typeDefs = [...Object.values(type)];

describe("Get Product details by ID", () => {
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
        const { expected, query, queryName } = getProductByIdSuccess;
        getProductById(executableSchema, expected);
        const result = await graphql(executableSchema, query);
        expect(result.data[queryName]).toEqual(expected);
        done();
    });
  });

  describe("Failure", () => {
    test("Should fail if schema is invalid", async (done) => {
      const { expected, query } = getProductByIdFailure;
      getProductById(executableSchema, expected);
      const result = await graphql(executableSchema, query);
      expect(result).toHaveProperty("errors");
      done();
    });
  });
});
