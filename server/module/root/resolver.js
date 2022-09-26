const { productQuery } = require('../product');

const resolver = {
    Query: {
        ...productQuery
    }
}

module.exports = resolver;
