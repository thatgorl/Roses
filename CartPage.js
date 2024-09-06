import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartActions";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems); // Get cart items from Redux state
  const dispatch = useDispatch();

  // Shipping modes and costs
  const shippingModes = {
    standard: { name: "Pep Store", cost: 30 },
    express: { name: "Pudo Locker", cost: 60 },
  };

  // State for selected shipping
  const [selectedShipping, setSelectedShipping] = useState("standard");

  // Calculate the total cost
  const calculateTotal = () => {
    const productTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shippingCost = shippingModes[selectedShipping].cost;
    return productTotal + shippingCost;
  };

  // Handle shipping selection
  const handleShippingChange = (e) => {
    setSelectedShipping(e.target.value);
  };

  // Remove an item from the cart
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">Your cart is empty.</div>
      ) : (
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* used the map function */}
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>R{item.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="my-4">
            <h4>Select Shipping Option:</h4>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="standardShipping"
                name="shipping"
                value="standard"
                checked={selectedShipping === "standard"}
                onChange={handleShippingChange}
              />
              <label className="form-check-label" htmlFor="standardShipping">
                {shippingModes.standard.name} (R{shippingModes.standard.cost})
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="expressShipping"
                name="shipping"
                value="express"
                checked={selectedShipping === "express"}
                onChange={handleShippingChange}
              />
              <label className="form-check-label" htmlFor="expressShipping">
                {shippingModes.express.name} (R{shippingModes.express.cost})
              </label>
            </div>
          </div>

          <div className="text-end">
            <h3>Total: R{calculateTotal().toFixed(2)}</h3>
          </div>

          <button className="btn btn-primary w-100 mt-4">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
