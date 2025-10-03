import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { use } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { CartContext } from "../../context/cart.context.jsx";
import { signOutUser } from "../../helpers/firebase.utils.js";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";

const Navigation = () => {
  const { isCartDropdownDisplayed } = use(CartContext)
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <div className="navigation-container">
        <Link to="/">
          <CrwnLogo className="navigation-logo" />
        </Link>
        <div className="navigation-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartDropdownDisplayed && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
