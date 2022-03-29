import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./card-item.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const CardIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});
const mapDipatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDipatchToProps)(CardIcon);
