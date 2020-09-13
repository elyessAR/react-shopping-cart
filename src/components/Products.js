import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                {this.props.products.map(product=>(
                    <li key={product.id}>
                      <div classname="product">
                      <a href={"#"+ product._id}>
                        <image src={product.image} alt={product.title}></image>
                        <p>
                            {product.title}
                        </p>
                      </a>
                      <div className="product-price">
                      <div>
                      {product.price}

                      </div>
                      <button classname="button-primary">
                      add to cart
                      </button>
                      </div>
                      </div>
                      </li>




                ))}
                
                </ul>
            </div>
        )
    }
}
