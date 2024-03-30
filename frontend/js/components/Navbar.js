/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import "../../sass/components/navbar.scss";
import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../utils/AuthContext";

const Navbar = () => {
  const history = useHistory();
  const { authenticated, setAuthenticated, loading } = useContext(AuthContext);

  console.log(authenticated);

  const handleLogout = () => {
    axios
      .post("/api/signout")
      .then((response) => {
        console.log(response);
        // Handle the response from the server
        // Redirect to Home after successful signin
        setAuthenticated(false);

        history.push("/");
        return response;
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 onClick={() => history.push("/")}>Inventory Manager</h1>

        {!loading && (
          <div className="signin-container">
            {authenticated && (
              <button
                className="signin-button"
                type="button"
                onClick={() => history.push("/equipment/new")}
              >
                Add Equipment
              </button>
            )}

            {!authenticated ? (
              <button
                className="signin-button"
                type="button"
                onClick={() => history.push("/sign-in")}
              >
                Sign In
              </button>
            ) : (
              <button
                className="signin-button"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
