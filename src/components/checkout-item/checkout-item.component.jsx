import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import { clearItemfromcart } from "../../redux/cart/cart.action";
const ChecoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemfromcart(item)),
});
export default connect(null, mapDispatchToProps)(ChecoutItem);
