import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }

        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = ((total + shipping) * 10) / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summery</h3>
            <p>items Order: {totalQuantity}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand total:${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
