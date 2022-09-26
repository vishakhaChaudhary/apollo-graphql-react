/* import packages */
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Container, Row, Col, Spinner, Card } from "react-bootstrap";

/* import helper */
import { baseHelper } from "../../../../helper/index";

/* import queries */
import { GET_PRODUCT_BY_ID } from "../../apollo/queries/index";

/* import constant */
import { cms, gql } from "../../../../constant/constant";

/**
 * @desc Component to view the individual product details
 * @param props
 * @returns 
 */

const ViewProduct = (props) => {
  const { match } = props || {};
  const { params } = match;
  const { id: productId } = params;
  const {
    loading: loadingProduct,
    data: productData,
  } = useQuery(GET_PRODUCT_BY_ID, { variables: { input: { id: productId } } });

  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    material: "",
    color: "",
    price: ""
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const getProduct = baseHelper.getResponseData(
      productData,
      gql.GET_PRODUCT_BY_ID
    );
    const getProductError = baseHelper.getResponseError(
      productData,
      gql.GET_PRODUCT_BY_ID
    );
    if (getProductError) {
      return;
    }

    setProduct(getProduct);
  }, [productData]);

  const {
    title = "",
    description = "",
    image = "",
    material = "",
    color = "",
    price = "",
  } = product || {};

  if (loadingProduct) {
    return (
      <div className="spinner">
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <>
      {product && (
        <Container>
          <Row className="view-product">
            <Col sm={6} className="mb-4 mb-sm-0">
              <Card style={{ width: "26rem" }}>
                <Card.Img
                  variant="top"
                  src={image}
                  onLoad={() => setImageLoaded(true)}
                />
              </Card>
            </Col>
            <Col sm={6}>
              <div className="product-details">
                {imageLoaded && (
                  <>
                    <h5>{title}</h5>
                    <p>{`${cms.label.description}: ${description}`}</p>
                    <p>{`${cms.label.material}: ${material}`}</p>
                    <p>{`${cms.label.color}: ${color}`}</p>
                    <p>{`${cms.label.price}: €${price}`}</p>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ViewProduct;
