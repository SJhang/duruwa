import styled from "styled-components";
import Content from "./content";

const Nav = styled.div`
  top: calc(25vh - 35px);
  right: 3vw;
  position: fixed;
  z-index: 100;
  pointer-events: none;
`;

const Line = styled.div`
  display: block;
  width: $toggle-size;
  padding: 2px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 2px;
    transform: translateZ(0) rotate(0);
    transition: background-color 0.2s ease-out;
  }
`;

export default function Menubar() {
  return (
    <Nav>
      <Content title="menu">
        <Line/>
        <Line/>
        </Content>
    </Nav>
  )
}
