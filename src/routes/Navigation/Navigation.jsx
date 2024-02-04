import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.Style.scss";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firbase/firebaseutils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/Cart-Drop-Down/CartDropDown";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crownlogo className="logo" />
        </Link>

        <div className="links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Login
            </Link>
          )}
          <CartIcon />
          {/* <Link className="link" to="/blog">
            Blog
          </Link> */}
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
