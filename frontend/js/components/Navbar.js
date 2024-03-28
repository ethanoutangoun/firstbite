/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import "../../sass/components/navbar.scss";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 onClick={() => history.push("/")}>Inventory Manager</h1>

        <div className="signin-container">
          <button className="signin-button" type="button" onClick={() => history.push("/equipment/new")}>
            Add Equipment
          </button>
          <button
            className="signin-button"
            type="button"
            onClick={() => history.push("/signin")}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
