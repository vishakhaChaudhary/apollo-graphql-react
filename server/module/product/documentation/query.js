const query = {
  getProducts: {
    description: "To get all the products",
    response: {
      data: {
        count: "Count of products in List",
        items: "Product schema",
      },
      error: "Server error",
      status: "ok",
    },
  },

  getProduct: {
    description: "To get the product by Id",
    response   : {
      data  : {
        id: "Unique Product ID",
        title: "Title of the product",
        description: "Description of the product",
        material: "Material of the product",
        color: "Color of the product",
        image: "Image of the product",
        release_date: "Release Date of the product",
        price: "Price of the product"
      },
      error : "Missing Product ID",
      status: "ok",
    },
  },
};

module.exports = query;
