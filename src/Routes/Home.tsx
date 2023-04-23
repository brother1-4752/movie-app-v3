import styled from "styled-components";

function Home() {
  const HomeBox = styled.div`
    width: 500px;
    height: 500px;
    background-color: ${(props) => props.theme.bgColor};
  `;

  return (
    <>
      <HomeBox></HomeBox>
    </>
  );
}

export default Home;
