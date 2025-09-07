import { Outlet, Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <>
      <div className="header-container">
        {/* <img className="header-logo" src="/image" alt=""/> */}
        <Link to="/">
            <p className="header-logo">Logo</p>
        </Link>
        <div className="navigation-container">
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link className="nav-link">Sign in</Link>
            <Link className="nav-link cart-logo">Logo</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Header;