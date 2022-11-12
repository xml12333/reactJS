import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/usersSlice";
import { currentUserRegister } from "../features/currentUserSlice";
function Login() {
  const [userEmail, setUserEmail] = useState("ivan@gmail.com");
  const [userPassword, setUserPassword] = useState("123");
  const [regUserName, setRegUserName] = useState("Ivan");
  const [regUserEmail, setRegUserEmail] = useState("ivan@gmail.com");
  const [regUserPassword1, setRegUserPassword1] = useState("123");
  const [regUserPassword2, setRegUserPassword2] = useState("123");
  const [wrongLoginUser, setWrongLoginUser] = useState(false);
  const [wrongRegUser, setWrongRegUser] = useState({
    error: false,
    message: "Invalid email address or password.",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const DB = useSelector((state)=>state.users.value);
  const loginFormHandle = (e) => {
    e.preventDefault();
    const userExist = DB.find(
      (item) => item.email === userEmail && item.password === userPassword
    );
    if (!userExist) {
      setWrongLoginUser(!userExist);
      setTimeout(() => {
        setWrongLoginUser(!!userExist);
      }, 3000);
    }
    if (userExist) {
      dispatch(currentUserRegister(userExist));
      navigate("/account");
    }
  };
  const registrationFormHandle = (e) => {
    e.preventDefault();
    if (regUserPassword1 !== regUserPassword2) {
      setWrongRegUser({ error: true, message: "Passwords do not match." });
      setTimeout(() => {
        setWrongRegUser({ error: false, message: "Passwords do not match." });
      }, 3000);
    } else {
      const userExist = DB.find((item) => item.email === regUserEmail);
      if (userExist) {
        setWrongRegUser({ error: true, message: "User exist." });
        setTimeout(() => {
          setWrongRegUser({ error: false, message: "User exist." });
        }, 3000);
      } else {
        dispatch(register({ name: regUserName, email: regUserEmail, password: regUserPassword1 }));
        dispatch(currentUserRegister({ name: regUserName, email: regUserEmail, password: regUserPassword1 }));
        navigate("/account");
      }
    }
  };
  return (
    <div className="columns">
      <form id="LoginForm" className="userForm" onSubmit={loginFormHandle}>
        <h2 className="title">Secure Sign In</h2>
        <p className="desription">For current customers</p>

        <div className={`error ${wrongLoginUser && "active"}`}>
          Invalid email address or password.
        </div>

        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="email"
            value={userEmail}
            required
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            data-name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
        </label>

        <button className="btn">Sign in</button>
      </form>

      <form
        id="RegistrationForm"
        className="userForm"
        onSubmit={registrationFormHandle}
      >
        <h2 className="title">Quick Registration</h2>
        <p className="desription">For new customers</p>

        <div className={`error ${wrongRegUser.error && "active"}`}>
          {wrongRegUser.message}
        </div>

        <label>
          <input
            type="text"
            placeholder="Full name"
            data-name="name"
            value={regUserName}
            onChange={(e) => setRegUserName(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="email"
            value={regUserEmail}
            onChange={(e) => setRegUserEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            data-name="password"
            value={regUserPassword1}
            onChange={(e) => setRegUserPassword1(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Verify Password"
            data-name="passwordVerify"
            value={regUserPassword2}
            onChange={(e) => setRegUserPassword2(e.target.value)}
            required
          />
        </label>

        <button className="btn">Create Account</button>
      </form>
    </div>
  );
}

export default Login;
