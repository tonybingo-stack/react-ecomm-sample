import React from "react";
import { addCart, delCart, rmvCart } from "../../redux/action";
export default function CartProduct({ cartProduct, dispatch }) {
  const handleRemove = () => {
    dispatch(rmvCart(cartProduct));
  };
  const handleReduce = (e) => {
    if (cartProduct.qty === 0) return;
    dispatch(delCart(cartProduct));
  };
  const handleAdd = () => {
    dispatch(addCart(cartProduct));
  };

  return (
    <div className="cartProductContainer row mt-4">
      <img
        src="/assets/P18.jpg"
        className="img-fluid col-6 p-0"
        alt={cartProduct.name}
      />
      <div className="cartProductDescription col-6 p-2">
        <p>{cartProduct.name}</p>
        <p>
          Quantity:
          <br />
          <button className="btn btn-light" onClick={handleReduce}>
            -
          </button>
          <span> {cartProduct.qty}</span>{" "}
          <button className="btn btn-light" onClick={handleAdd}>
            +
          </button>
        </p>
        <p>Item - Price: $ {cartProduct.price}</p>
        <p>Sub - Total: $ {cartProduct.sub_total}</p>
      </div>
      <div
        className="d-flex p-2"
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <button className="btn btn-outline-danger" onClick={handleRemove}>
          Remove
        </button>
        <button className="btn btn-success">Buy Now</button>
      </div>
    </div>
  );
}
