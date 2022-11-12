import { getProductById, getCartItem } from "../utils/utils";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "../features/currentUserSlice";
import { useNavigate } from "react-router-dom";
function Cart() {
  const products = useSelector((state) => state.products.value);
  const currentUser = useSelector((state) => state.currentUser.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countTotal = () => {
    let sum = 0;
    currentUser.shoppingCart.forEach((order) => {
      let product = getProductById(products, Number(order.id));
      if (product.sale) {
        sum =
          sum +
          Math.floor(
            product.price - (product.price / 100) * product.salePercent
          ) *
            order.count;
      } else {
        sum = sum + product.price * order.count;
      }
    });
    return sum;
  };
  const addRemoveHandler = (e) => {
    let productId = e.target.parentElement.dataset.removeid;
    let item = getCartItem(currentUser.shoppingCart, productId);
    let tempCurrentUser = JSON.parse(JSON.stringify(currentUser));
    tempCurrentUser.shoppingCart = tempCurrentUser.shoppingCart.filter(
      (el) => el.id !== item.id
    );
    dispatch(updateCurrentUser(tempCurrentUser));
  };
  const addCompleteHandler = (e) => {
    e.preventDefault();
    let tempCurrentUser = JSON.parse(JSON.stringify(currentUser));
    tempCurrentUser.orders = [
      ...tempCurrentUser.orders,
      ...tempCurrentUser.shoppingCart,
    ];
    tempCurrentUser.shoppingCart = [];
    tempCurrentUser.orders.forEach((el) => {
      tempCurrentUser.favourites = tempCurrentUser.favourites.filter(
        (fav) => fav !== Number(el.id)
      );
    });
    dispatch(updateCurrentUser(tempCurrentUser));
    navigate("/account");
  };
  const addQtyHandler = (e, count) => {
    let productId = e.target.dataset.id;
    let tempCurrentUser = JSON.parse(JSON.stringify(currentUser));
    let item = getCartItem(tempCurrentUser.shoppingCart, productId);
    item.count = Number(e.target.value);
    dispatch(updateCurrentUser(tempCurrentUser));
  };
  return (
    <div className="shoppingCart__container">
      <div className="table__container">
        <table className="order__table" id="shopCartTable">
          <caption>Items in Shopping Cart</caption>
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUser.shoppingCart.map((order) => {
              let product = getProductById(products, Number(order.id));
              return (
                <>
                  <tr>
                    <td>
                      <div class="item__info">
                        <img
                          src={`images/products/${product.img}.png`}
                          alt={product.title}
                          height="100"
                        />
                        <div>
                          <p class="item__info--title">{product.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={order.count}
                        onChange={(e) => addQtyHandler(e, order.count)}
                        min="1"
                        id="quantity"
                        data-id={product.id}
                      />
                    </td>
                    {product.sale ? (
                      <>
                        <td>${product.price}</td>
                        <td>
                          <span class="item__sale">
                            - {product.salePercent}%
                          </span>
                        </td>
                        <td data-totalId={product.id}>
                          {Math.floor(
                            product.price -
                              (product.price / 100) * product.salePercent
                          ) * order.count}
                        </td>
                      </>
                    ) : (
                      <>
                        <td>${product.price}</td>
                        <td>-</td>
                        <td data-totalId={product.id}>
                          {product.price * order.count}
                        </td>
                      </>
                    )}
                    <td>
                      <button
                        class="item__remove"
                        id="remove"
                        data-removeId={product.id}
                        onClick={addRemoveHandler}
                      >
                        <img src="images/delete.png" alt="delete" height="20" />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="table__container">
        <form action="" id="shopCartForm">
          <table className="order__summary" style={{ width: "100%" }}>
            <caption>My Order Summary</caption>
            <tbody>
              <tr>
                <th>Order Total:</th>
                <td id="orderTotal">${countTotal()}</td>
              </tr>
            </tbody>
          </table>
          <div className="order__summary--btns">
            <button
              className="btn"
              id="complete"
              style={{ margin: "auto" }}
              onClick={addCompleteHandler}
            >
              Complete Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cart;
