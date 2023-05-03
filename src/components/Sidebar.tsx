import {
  faClock,
  faFire,
  faHouse,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SidebarList = styled.ul`
  width: 80px;
  height: 100vh;
  background-color: #f3f5f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d6e0ea;
`;
const SidebarListItem = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  & > svg {
    margin-bottom: 10px;
  }

  & > span {
    font-size: 12px;
  }
`;

function Sidebar() {
  return (
    <>
      <SidebarList>
        <SidebarListItem>
          <FontAwesomeIcon icon={faHouse} />
          <span>홈</span>
        </SidebarListItem>
        <SidebarListItem>
          <FontAwesomeIcon icon={faClock} />
          <span>최근</span>
        </SidebarListItem>
        <SidebarListItem>
          <FontAwesomeIcon icon={faFire} />
          <span>인기</span>
        </SidebarListItem>
        <SidebarListItem>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>좋아요</span>
        </SidebarListItem>
      </SidebarList>
    </>
  );
}

export default Sidebar;
