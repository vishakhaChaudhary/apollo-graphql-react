/* import packages */
import React from "react";
import { Pagination } from "react-bootstrap";

/**
 * Generic Component for the Pagination
 * @param props
 * @returns
 */
const CustomPagination = (props) => {
  const { total, current, perPage, onChangePage } = props || {};
  const totalPages = Math.ceil(total / perPage);
  let items = [];
  if (current > 1) {
    items.push(<Pagination.Prev key="prev" onClick={() => onChangePage(current - 1)} />);
  }

  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item key={page} data-page={page} active={page === current} onClick={() => onChangePage(page)}>
        {page}
      </Pagination.Item>
    );
  }

  if (current < totalPages) {
    items.push(<Pagination.Next key="next" onClick={() => onChangePage(current + 1)} />);
  }

  return <Pagination>{items}</Pagination>;
};

export default CustomPagination;
