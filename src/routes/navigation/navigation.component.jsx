import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { use } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = use(UserContext);

  const signOut = async () => {
    // setCurrentUser(null);
    const res = await signOutUser();
    console.log(res)
  };

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
            <span onClick={signOut} className="nav-link">
              Sign out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign in
            </Link>
          )}
          <Link className="nav-link cart-logo">Logo</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
