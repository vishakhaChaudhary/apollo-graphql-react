import { gql } from "@apollo/client";

const GET_PRODUCT_BY_ID = gql`
query($input: GetProductId!) {
    getProductById (input: $input ) {
      status
      error
      data {
        id
        title
        material
        color
        image
        description
        release_date
        price
      }
    }
  }
`;

export default GET_PRODUCT_BY_ID;
