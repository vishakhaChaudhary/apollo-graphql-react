const getProductSuccess = {
    query: `query{
          getProducts{
           data{
            items {
                id
                title
                description
                image
                material
                color
                release_date
            }
            count
          }
           error
            status
          }
        }`,
    expected: {
      status: "ok",
      data  : {
        items: [{
            id: "1",
            title: "Gorgeous Metal Sausages",
            description: "relationships",
            image: "http://placeimg.com/640/480/technics",
            release_date: "2022-01-03T13:22:22.202Z",
            material: "Plastic",
            color: "violet"
        }],
        count: 1
      },
      error: null,
    },
    queryName: "getProducts",
  };

  module.exports = {
    getProductSuccess
  }
