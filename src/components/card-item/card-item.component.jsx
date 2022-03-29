import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./card-item.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CardIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});
const mapDipatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDipatchToProps)(CardIcon);
