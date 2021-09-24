import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./product.css";

const Product = (props) => {
    const { name, img, price, stock, seller, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="single-product ">
                <h4 className="product-name">{name}</h4>
                <p>By: {seller}</p>
                <p>Price: ${price}</p>
                <p>
                    <small>only {stock} left in stock - order soon</small>
                </p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                />
                <br />
                <button
                    className="purchase"
                    onClick={() => props.handleAddToCart(props.product)}
                >
                    {<FontAwesomeIcon icon={faShoppingCart} />}add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
