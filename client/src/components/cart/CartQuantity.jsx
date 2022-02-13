import React, { useState } from "react";

const CartQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const { value } = e.target.value;
    setQuantity(value);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else if (quantity < 1) {
      setQuantity(1);
    }
  };

  return (
    <div className="shop_details_quantity_container">
      <div className="shop_details_quantity_btn" onClick={decrementQuantity}>
        -
      </div>
      <input
        className="shop_details_quantity"
        value={quantity}
        onClick={handleQuantityChange}
      />
      <div className="shop_details_quantity_btn" onClick={incrementQuantity}>
        +
      </div>
    </div>
  );
};

export default CartQuantity;
