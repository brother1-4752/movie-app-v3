import { faBars, faSearch, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid black;
`;

function Header() {
  return (
    <>
      <header>
        <HeaderList>
          <li>
            <FontAwesomeIcon icon={faBars} />
            <Link to="/">Home</Link>
          </li>
          <li>
            <form>
              <input type="text" placeholder="검색..." name="" id="" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </li>
          <li>
            <Link to="login">로그인</Link>
            <Link to="signup">회원가입</Link>
            <button>
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </li>
        </HeaderList>
      </header>
    </>
  );
}

export default Header;
