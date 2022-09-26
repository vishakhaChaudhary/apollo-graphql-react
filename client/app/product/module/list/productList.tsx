/* import packages */
import React, { useEffect, useState, useCallback } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";

/* import helper */
import { baseHelper } from "../../../../helper/index";

/* import queries */
import { GET_PRODUCT } from "../../apollo/queries/index";

/* import components */
import List from "./list";
import CustomPagination from "../../../generic/pagination";

/* import constants */
import { gql, cms, constant } from "../../../../constant/constant";

/**
 * @desc Component for listing the products
 * @param props
 * @returns
 */
const ProductList = (props) => {
  const { history = {} } = props || {};
  const queryParam = baseHelper.getQueryParams(history.location.search);
  const [perPage, setPerPage] = useState(
    parseInt(queryParam.perPage as string, 10) || 10
  );
  const [page, setPage] = useState(
    parseInt(queryParam.page as string, 10) || 1
  );
  const [sortBy, setSortBy] = useState(String(queryParam.sortBy));
  const [order, setOrder] = useState(queryParam.order);
  const [search, setSearch] = useState(queryParam.search);

  const inputData = {
    sortBy,
    order,
    search,
    page: parseInt(queryParam.page as string, 10) || 1,
    perPage: parseInt(queryParam.perPage as string, 10) || 10,
  };

  const { data: dataProductList } = useQuery(GET_PRODUCT, {
    variables: { input: inputData },
  });

  const [productListData, setProductListData] = useState([]);
  const [productListTotal, setProductListTotal] = useState(0);

  useEffect(() => {
    const getProducts = baseHelper.getResponseData(
      dataProductList,
      gql.GET_PRODUCTS
    );
    const getProductsError = baseHelper.getResponseError(
      dataProductList,
      gql.GET_PRODUCTS
    );
    if (getProductsError) {
      return;
    }

    setProductListData(getProducts.items);
    setProductListTotal(getProducts.count);
  }, [dataProductList]);

  /* method to render list of products */
  const renderProductList = () => {
    if (!productListTotal) {
      return (
        <div className="spinner">
          <Spinner animation="grow" />
        </div>
      );
    }
    const list = productListData.map((item) => {
      return <List key={item.id} data={item} />;
    });

    return list;
  };

  const handleSortBy = (event) => {
    const [sortBy, order] = event.target.value.split("-");
    setSortBy(sortBy);
    setOrder(order);
    history.push({
      search: `?sortBy=${sortBy}&order=${order}`,
    });
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    history.push({
      search: `?search=${value}`,
    });
  };

  const handlePageChange = (page) => {
    setPage(page);
    history.push({
      search: `?page=${page}&limit=${perPage}`,
    });
  };

  return (
    <div className="container">
      <div className="filter">
        <Form.Control
          size="sm"
          type="search"
          placeholder="Search"
          onChange={handleSearchChange}
        />
        <Form.Select
          className="mx-2"
          aria-label="Default select example"
          onChange={handleSortBy}
        >
          <option disabled={true}>{cms.label.sortBy}</option>
          <option value="id-asc">{`${cms.label.id} (${constant.ASC})`}</option>
          <option value="id-desc">{`${cms.label.id} (${constant.DESC})`}</option>
          <option value="title-asc">{`${cms.label.title} (${constant.ASC})`}</option>
          <option value="title-desc">{`${cms.label.title} (${constant.DESC})`}</option>
        </Form.Select>
      </div>
      <div className="list">{renderProductList()}</div>
      <div className="pagination">
        {productListTotal > 1 && (
          <CustomPagination
            total={productListTotal}
            current={page}
            perPage={perPage}
            onChangePage={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
