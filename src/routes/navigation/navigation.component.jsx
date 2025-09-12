import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <Link to="/">
            <CrwnLogo className="navigation-logo" />
        </Link>
        <div className="navigation-container">
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/auth" className="nav-link">Sign in</Link>
            <Link className="nav-link cart-logo">Logo</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;