import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log({1: password.current.value, 2:passwordAgain.current.value})
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
              required
              type="text"
              placeholder="Username"
              className="loginInput"
              ref={username}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
            />
            <input
              required
              minLength="6"
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
            />
            <input
              required
              type="password"
              placeholder="Password Again"
              className="loginInput"
              ref={passwordAgain}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log Into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
