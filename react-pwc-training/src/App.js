import React from 'react';
import { data } from './data';

class ProductList extends React.Component {
  render() {
    const products = data.map((prod) => {
      return(
        <Product
        key={'product-' + prod.id}
        id={prod.id}
        title={prod.title}
        description={prod.description}
        url={prod.url}
        votes={prod.votes}
        submitter_avatar_url={prod.submitter_avatar_url}
        product_image_url={prod.product_image_url}
      />
      )
    });
    console.log(products);
    return (
      <div className="ui items">
        {products}
      </div>

    );
  }
}

export default ProductList;

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.product_image_url} role="presentation" />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a><i className='large caret up icon'></i></a>
            {this.props.votes}
          </div>

          <div className='description'>
            <a href="{this.props.url}">{this.props.title}</a>
          </div>

          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitter_avatar_url}
              />
          </div>
        </div>
      </div>
    );
  }
};