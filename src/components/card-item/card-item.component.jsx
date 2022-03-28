import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./card-item.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CardIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDipatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDipatchToProps)(CardIcon);
