import React from "react";
import { getProductById, getCartItem } from "../utils/utils";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "../features/currentUserSlice";
function Favourites() {
  const products = useSelector((state) => state.products.value);
  const currentUser = useSelector((state) => state.currentUser.value);
  const dispatch = useDispatch();
  const addToCartHandler = (e) => {
    let productId =
      e.target.parentElement.dataset.id ||
      e.target.parentElement.parentElement.dataset.id;
    let item = getCartItem(currentUser.shoppingCart, String(productId));
    let tempCurrentUser = JSON.parse(JSON.stringify(currentUser));
    if (item) {
      tempCurrentUser.shoppingCart.pop(item);
      if (e.target.classList.contains("product__cart")) {
        e.target.classList.remove("product__cart--in");
      } else {
        e.target.parentElement.classList.remove("product__cart--in");
      }
    } else {
      tempCurrentUser.shoppingCart.push({ id: productId, count: 1 });

      if (e.target.classList.contains("product__cart")) {
        e.target.classList.add("product__cart--in");
      } else {
        e.target.parentElement.classList.add("product__cart--in");
      }
    }
    dispatch(updateCurrentUser(tempCurrentUser));
  };
  const addToFavoritesHandler = (e) => {
    let productId =
      e.target.parentElement.dataset.id ||
      e.target.parentElement.parentElement.dataset.id;
    let item = getCartItem(currentUser.shoppingCart, productId);
    let tempCurrentUser = JSON.parse(JSON.stringify(currentUser));
    if (!item) {
      tempCurrentUser.favourites.pop(productId);
      e.target.src = "images/product__favourite.png";
      dispatch(updateCurrentUser(tempCurrentUser));
    }
  };

  return (
    <div className="favourites__container">
      <div className="table__container">
        <table className="order__table" id="favouriteTable">
          <caption>Favourite Items</caption>
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUser.favourites.map((order) => {
              let product = getProductById(products, Number(order));
              return (
                <>
                  <tr>
                    <td>
                      <div className="item__info">
                        <img
                          src={`images/products/${product.img}.png`}
                          alt={product.title}
                          height="100"
                        />
                        <div>
                          <p className="item__info--title">{product.title}</p>
                        </div>
                      </div>
                    </td>

                    {product.sale ? (
                      <>
                        <td>${product.price}</td>
                        <td>
                          <span className="item__sale">
                            - {product.salePercent}%
                          </span>
                        </td>
                        <td>
                          {Math.floor(
                            product.price -
                              (product.price / 100) * product.salePercent
                          )}
                        </td>
                      </>
                    ) : (
                      <>
                        <td>${product.price}</td>
                        <td>-</td>
                        <td>{product.price}</td>
                      </>
                    )}
                    <td data-id={order}>
                      {getCartItem(
                        currentUser.shoppingCart,
                        String(product.id)
                      ) ? (
                        <button
                          className="product__cart product__cart--in"
                          id="product-cart"
                          onClick={addToCartHandler}
                        >
                          <img
                            src="images/shopping-cart.png"
                            alt="shopping cart"
                            height="20"
                          />
                        </button>
                      ) : (
                        <button
                          className="product__cart"
                          id="product-cart"
                          onClick={addToCartHandler}
                        >
                          <img
                            src="images/shopping-cart.png"
                            alt="shopping cart"
                            height="20"
                          />
                        </button>
                      )}
                      <button className="item__favourite" id="favourite">
                        <img
                          src="images/product__favourite--true.png"
                          alt="favourite"
                          height="20"
                          onClick={addToFavoritesHandler}
                        />
                      </button>
                    </td>
                  </tr>
                  ;
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Favourites;
