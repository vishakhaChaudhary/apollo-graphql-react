import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query getProducts($input: FilterParams) {
    getProducts(input: $input) {
        data {
            count
            items {
                id
                title
                description
                image
                release_date
                material
                color
            }
        }
        error
        status
    }
}
`;

export default GET_PRODUCT;
