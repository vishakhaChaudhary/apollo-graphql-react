const getProductByIdSuccess = {
    query: `query{
          getProductById(input: { id: "1" }){
           data{
                id
                title
                description
                image
                material
                color
                release_date
            }
           error
           status
          }
        }`,
    expected: {
      status: "ok",
      data  : {
            id: "1",
            title: "Gorgeous Metal Sausages",
            description: "relationships",
            image: "http://placeimg.com/640/480/technics",
            release_date: "2022-01-03T13:22:22.202Z",
            material: "Plastic",
            color: "violet"
        },
      error: null,
    },
    queryName: "getProductById",
  };

  const getProductByIdFailure = {
    query: `query{
      getProductById(input: { id: 1 }){
        data{
             id
             title
             description
             image
             material
             color
             release_date
         }
        error
        status
       }
    }`,
    expected:
    {
      data  : null,
      status: "error",
      error : "Some Error",
    },
    queryName: "getProductById",
  };

  module.exports = {
    getProductByIdSuccess,
    getProductByIdFailure
  }