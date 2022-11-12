import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartItem } from "../utils/utils";
import { updateCurrentUser } from "../features/currentUserSlice";
function ItemsList({ category, product }) {
  const currentUser = useSelector((state) => state.currentUser.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToFavoritesHandler = (e) => {
    e.preventDefault();
    if (!currentUser.status) {
      navigate("/login");
    } else {
      let productId = e.target.parentElement.parentElement.dataset.id;
      console.log(productId)
      let tempCurrentUser = JSON.parse(JSON.stringify(currentUser));
      if (currentUser.favourites.includes(productId)) {
        tempCurrentUser.favourites.pop(productId);
        e.target.src = "images/product__favourite.png";
      } else {
        tempCurrentUser.favourites.push(productId);
        e.target.src = "images/product__favourite--true.png";
      }
      dispatch(updateCurrentUser(tempCurrentUser))
    }
  };
  const addToCartHandler = (e) => {
    e.preventDefault();
    if (!currentUser.status) {
      navigate("/login");
    } else {
      let productId =
        e.target.parentElement.parentElement.parentElement.dataset.id ||
        e.target.parentElement.parentElement.dataset.id;
      // addToCart(e, productId, headerShoppingCartCount);
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
      dispatch(updateCurrentUser(tempCurrentUser))
    }
  };

  return (
    <>
      {product.categories.includes(category) && (
        <div className="product" data-id={product.id}>
          <button
            className="product__favourite"
            onClick={addToFavoritesHandler}
          >
            <img
              src={`images/product__favourite${
                currentUser.status
                  ? currentUser.favourites.includes("" + product.id)
                    ? "--true"
                    : ""
                  : ""
              }.png`}
              alt="favourite"
              height="20"
            />
          </button>
          <img
            src={`images/products/${product.img}.png`}
            className="product__img"
            alt={product.title}
            height="80"
          />
          <p className="product__title">{product.title}</p>
          {product.sale ? (
            <div className="product__sale">
              <span className="product__sale--old">${product.price}</span>
              <span className="product__sale--percent">
                -{product.salePercent}%
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="product__info">
            <span className="product__price">
              {product.sale
                ? Math.floor(
                    product.price - (product.price / 100) * product.salePercent
                  )
                : product.price}
            </span>
            {currentUser.status ? (
              getCartItem(currentUser.shoppingCart, String(product.id)) ? (
                <button
                  className="product__cart product__cart--in"
                  onClick={addToCartHandler}
                >
                  <img
                    src="images/shopping-cart.png"
                    alt="shopping cart"
                    height="20"
                  />
                </button>
              ) : (
                <button className="product__cart" onClick={addToCartHandler}>
                  <img
                    src="images/shopping-cart.png"
                    alt="shopping cart"
                    height="20"
                  />
                </button>
              )
            ) : (
              <button className="product__cart" onClick={addToCartHandler}>
                <img
                  src="images/shopping-cart.png"
                  alt="shopping cart"
                  height="20"
                />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ItemsList;
