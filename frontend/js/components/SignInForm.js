/* eslint-disable promise/always-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../sass/components/signinform.scss";

import { AuthContext } from "../utils/AuthContext";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { setAuthenticated } = useContext(AuthContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/signin", { email: username, password })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setAuthenticated(true);
        }
        // Handle the response from the server
        // Redirect to Home after successful signin
        history.push("/");
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
    // Perform signup logic here, e.g., submit username and password to the server
    // Redirect to Home after successful signup
    history.push("/");
  };

  return (
    <div className="login-content">
      <div className="login-form">
        <div className="align">
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              required
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              placeholder="Password"
              required
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className="login-button" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
