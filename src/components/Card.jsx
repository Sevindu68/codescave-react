import React, { useState } from "react";

const Card = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const showAlert = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="card">
      <img src="./images/burger.jpeg" alt="Card" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">
          This is a simple card with quantity control built using React.
        </p>

        <div className="bottom-container">
          <div className="quantity-container">
            <button className="quantity-btn" onClick={decreaseQuantity}>
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="quantity-input"
            />
            <button className="quantity-btn" onClick={increaseQuantity}>
              +
            </button>
          </div>

          <button className="card-btn" onClick={showAlert}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
