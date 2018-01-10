import React, { Component } from 'react';
import './Tab.css';
import _ from 'underscore';
import Row from './Row.js';

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {sortType: 'price'}
  }
  sortbyprice = () => {
    this.setState({sortType:'price'})
  }
  sortbytitle = () => {
    this.setState({sortType:'title'} )

  }
  sortbyreference = () => {
    this.setState({sortType:'decathlon_id'} )
  }
  render() {
    return (
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th><button onClick={this.sortbyreference}>Références</button></th>
            <th><button onClick={this.sortbytitle}>Title</button></th>
            <th><button onClick={this.sortbyprice}>Price</button></th>
          </tr>
        </thead>
  <tbody>
  {_.sortBy(this.props.products, this.state.sortType).map((product) =>
    <Row product={product}></Row>
  )}s
  </tbody>
</table>
    );
  }
}


export default Tab;
