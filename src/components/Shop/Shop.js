import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProsucts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displaySearchProduct, setDisplaySearchProduct] = useState([])

    useEffect(() => {
        fetch("./products.JSON")
            .then((res) => res.json())
            .then((data) => {
                setProsucts(data)
                setDisplaySearchProduct(data)
            });
                
    }, []);

    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storedCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find((p) => p.key === key);
                if (addedProduct) {
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    };
    const handleSearch = (e) => {
        const searchText=e.target.value;
        const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchedProducts.length);
        setDisplaySearchProduct(matchedProducts)


    };
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search here"
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {displaySearchProduct.map((pro) => (
                        <Product
                            key={pro.key}
                            product={pro}
                            handleAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    );
};

export default Shop;
