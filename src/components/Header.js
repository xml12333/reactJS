import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetCurrentUser } from "../features/currentUserSlice";
import { logOut } from "../features/usersSlice";
function Header() {
  const currentUser = useSelector((state) => state.currentUser.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(logOut(currentUser));
    dispatch(resetCurrentUser());
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link to="/">
            <img src="images/logo.png" alt="logo" height="45" />
          </Link>
          <div className="header__info">
            Hi,{" "}
            <Link
              to={currentUser.status ? "account" : "login"}
              className="header__user"
              id="headerUser"
            >
              {currentUser.status ? currentUser.name : "Log in"}
            </Link>
            <div className="header__shop">
              <Link
                to={currentUser.status ? "favourites" : "login"}
                id="headerFavourites"
              >
                <img src="images/favourite.png" alt="favourite" height="20" />
                <span
                  className="header__shop--count"
                  id="headerFavouritesCount"
                >
                  {currentUser.status ? currentUser.favourites.length : "0"}
                </span>
              </Link>
              <Link
                to={currentUser.status ? "cart" : "login"}
                id="headerShoppingCart"
              >
                <img src="images/shopping-cart.png" alt="cart" height="20" />
                <span
                  className="header__shop--count"
                  id="headerShoppingCartCount"
                >
                  {currentUser.status ? currentUser.shoppingCart.length : "0"}
                </span>
              </Link>
            </div>
            <button
              className={`header__logout ${
                currentUser.status ? "active" : ""
              } }`}
              id="headerLogout"
              onClick={logOutHandler}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
