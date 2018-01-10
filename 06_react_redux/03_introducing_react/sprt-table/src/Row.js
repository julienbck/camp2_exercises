import React, { Component } from 'react';
import './Row.css';


class Row extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.product.decathlon_id}</td>
        <td>{this.props.product.title}</td>
        <td>{this.props.product.price} €</td>
      </tr>
    );
  }
}



export default Row;
