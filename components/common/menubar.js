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
  padding: $toggle-line-size/2;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: $toggle-line-size;
    background-color: $toggle-line-color;
    border-radius: 2px;
    transform: translateZ(0) rotate(0);
    transition: background-color 0.2s ease-out;
  }
`;


export default function Menubar() {

  onClick
  return (
    <Nav>
      <Content title="menu">
        <button class="cursor-pointer pointer-events-auto w-10 h-10 relative p-0 m-0" role="button" type="button">
          
        </button>
      </Content>
    </Nav>
  )
}