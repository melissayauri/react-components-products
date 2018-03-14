/*import React, { Component } from 'react';*/
import React from 'react';

const ProductCategoryRow = ({category }) =>(
  <tr className="tr-category">
    <th colSpan="2">{category}</th>
  </tr>)

/*
class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props;
    return (
      <tr className="tr-category">
        <th colSpan="2">{category}</th>
      </tr>)
    }
}
*/
export default ProductCategoryRow
