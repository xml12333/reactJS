import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductById} from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { deleteUser, logOut } from "../features/usersSlice";
import {
  resetCurrentUser,
  updateCurrentUser,
} from "../features/currentUserSlice";
function Account() {
  const products = useSelector((state) => state.products.value);
  const currentUser = useSelector((state) => state.currentUser.value);
  const [name, setName] = useState(currentUser.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addDeleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteUser(currentUser));
    localStorage.removeItem("currentUser");
    dispatch(resetCurrentUser(currentUser));
    navigate("/");
  };
  const addSaveHandler = (e) => {
    e.preventDefault();
    let tempCurrentUser = JSON.parse(JSON.stringify(currentUser));
    const userName = document.getElementById("user-name");
    tempCurrentUser = { ...tempCurrentUser, name: userName.value };
    dispatch(updateCurrentUser(tempCurrentUser));
    dispatch(logOut(tempCurrentUser));
  };
  return (
    <div className="shoppingCart__container">
      <div className="table__container">
        <table className="order__table" id="orderTable">
          <caption>Ordered Items</caption>
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {currentUser.orders.map((order) => {
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

                    {product.sale ? (
                      <>
                        <td>${product.price}</td>
                        <td>
                          <span class="item__sale">
                            - {product.salePercent}%
                          </span>
                        </td>
                        <td>
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
                        <td>{product.price * order.count}</td>
                      </>
                    )}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="table__container">
        <form action="" id="orderForm">
          <table className="order__summary">
            <caption>My Info</caption>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>
                  <input
                    type="text"
                    id="user-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>
                  <span id="user-email">{currentUser.email}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="order__summary--btns">
            <button className="btn" id="save" onClick={addSaveHandler}>
              Save changes
            </button>
            <button
              className="btn delete__acc"
              id="delete"
              onClick={addDeleteHandler}
            >
              Delete account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
