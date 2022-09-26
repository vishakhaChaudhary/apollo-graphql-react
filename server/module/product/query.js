const { ApolloError } = require("apollo-server-express");

class Query {
    getProducts = async (_, args, { dataSources }) => {
        try {
          const { product: productAsService } = dataSources;

          const productList = await productAsService.getProducts({...args.input});
          return {
            status: "ok",
            data: productList
          }

        } catch (error) {
          throw new ApolloError(error);
        }
    }

    getProductById = async (_, args, { dataSources }) => {
        try {
            const {id: productId} = { ...args.input };
            if (!productId) {
                throw new ApolloError("Missing Product ID"); 
            }

            let price;

            const { product: productAsService } = dataSources;
            let productData = await productAsService.getProductById(productId);

            
            if (productData) {
              const productPrice = await productAsService.getProductPrice(productId);
              price = productPrice[0].price; 
            }
            
            productData = {...productData, price };
            return {
                status: "ok",
                data: productData
            }
  
          } catch (error) {
            throw new ApolloError(error);
          }
    } 
}

module.exports = new Query();
