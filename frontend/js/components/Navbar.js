/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import "../../sass/components/navbar.scss";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 onClick={() => history.push("/")}>Navbar</h1>
      </div>
    </nav>
  );
};

export default Navbar;
