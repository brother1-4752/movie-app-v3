import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <>
      <header>
        <ul>
          <li>
            <FontAwesomeIcon icon={faBars} />
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <button onClick={onAboutClick}>About</button>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
