import React from 'react';
import {data} from './data';

class ProductList extends React.Component {
  render() {
    const prod = data[0];
    return (
      <div className="ui items">
          <Product 
            id={prod.id} 
            title={prod.title} 
            description={prod.description} 
            url={prod.url} 
            votes={prod.votes} 
            submitter_avatar_url={prod.submitter_avatar_url} 
            product_image_url={prod.product_image_url}
          
          />
      </div>

    );
  }
}

export default ProductList;

class Product extends React.Component {
    render(){
      return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.product_image_url} role="presentation"/>
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a><i className='large caret up icon'></i></a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src='images/avatars/daniel.jpg'
              role="presentation"
              />
          </div>
        </div>
      </div>
    );
    }
};