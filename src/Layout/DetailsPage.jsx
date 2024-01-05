import { useState } from "react";
import CartIcon from "../Components/Icons/CartIcon";

function Details() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(1, quantity + amount);
    setQuantity(newQuantity);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require("../Asset/Flower/f1.png")}
            alt="Product"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>Rose Bouqet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. labore et dolore magna aliqua. labore
            labore et dolore magna aliqua. labore et dolore magna aliqua. et
            labore et dolore magna aliqua. labore et dolore magna aliqua. dolore
            labore et dolore magna aliqua. labore et dolore magna aliqua. magna
            labore et dolore magna aliqua. labore et dolore magna aliqua. labore
            labore et dolore magna aliqua. et dolore magna aliqua. aliqua.
          </p>
          <p className="price">
            <strong>Price: </strong>
            <p>Rp. 250.000</p>
          </p>
          <div className="d-flex">
            <button
              className="btn btn-outline-danger"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="mx-4 my-1">{quantity}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>

          <button className="add-to-cart">
            <CartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
