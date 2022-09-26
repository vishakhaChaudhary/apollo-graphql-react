/* import packages */
import React from 'react';

/* import constant */
import { cms } from "../../../../constant/constant";

/**
 * @desc List component for listing list of items
 * @param props
 * @returns 
 */
const List = (props) => {
  const { data } = props || {};
  const { id = "", title = "", image = "" } = data || {};

  return (
    <>
      <div className='card' id={id} data-testid='listItem'>
        <a href={`/product/${id}`} className='product-thumbnail'>
    
            <img className='center' data-testid='itemImage' src={image} alt={title} />
 
        </a>
        <div className='list-container' data-testid='list-container'>
          <hr />
          <div className='product-details' data-testid='product-detail'>
            <h4 className='product-card-title d-flex justify-content-between'>
              <strong>{title}</strong>
              <a href={`/product/${id}`}>{cms.label.view}</a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
