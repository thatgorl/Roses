import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartActions";
import products from "./Products"; // Import the products data

function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); // Access cart items from Redux state

  // Function to check if a product is already in the cart
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div id="ProductPage" className="container py-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-2 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h4>{product.price}</h4>

                {isInCart(product.id) ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-light"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
