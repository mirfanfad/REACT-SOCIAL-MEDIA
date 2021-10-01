import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const history = useHistory();

  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const handleRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">NafryzeSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on NafryzeSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
            />
            <button className="loginButton" type="submit">
              {isFetching ? "Loading" : "Sign In"}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton" onClick={handleRegister}>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
