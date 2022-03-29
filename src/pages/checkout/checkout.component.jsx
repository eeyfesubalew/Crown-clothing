import React from "react";
import "./checkout.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotalItems,
} from "../../redux/cart/cart.selectors";
const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
    </div>
    {cartItems.map((cartItem) => cartItem.name)}
    <div className="total">
      <span>TOTAL: {total}</span>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalItems,
});
export default connect(mapStateToProps)(CheckOutPage);
