import React from "react";
// import { CartContext } from "../../contexts/cart.context";
import "./checkout.style.scss";
import CheckOutItem from "../checkOutItems/CheckOutItem";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
function CheckOut() {
  // const { cartItems, cartTotal } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <>
      <div className="checkout-container">
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
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {console.log(cartItems)}
        {cartItems.map((cartItem) => (
          <CheckOutItem
            key={cartItem.id}
            cartItem={cartItem}
            //  removeItemFromCart={removeItemFromCart}
          />
        ))}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </>
  );
}

export default CheckOut;
