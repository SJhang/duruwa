import { useState } from "react";
import styled from 'styled-components'
import classNames from "classnames";
import Container from './container';
import Content from './content';

const HeaderWrapper = styled.header`
padding-top: calc(25vh - 35px);
`;

const H1 = styled.h1`
letter-spacing: .6875rem;
`

export default function Header({ hide }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickDropdown = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };


  return (
    <HeaderWrapper className={"bg-white sm:px-5 leading-none"}>
      <Container className="sm:flex sm:justify-between sm:mb-5 sm:px-5 sm:items-center">
        <div className="flex item-center py-3 justify-between sm:p-0">
          <H1 className="sm:text-7xl text-black">
            <a href="#">이츠타임</a>
          </H1>
        </div>
        <Content title="summary" className="mr-48">마음 놓고 할인하는 세상을 만들고 있습니다</Content>
      </Container>
    </HeaderWrapper>
  );
}


/* 

<div className="">
          <button
            type="button"
            className="block text-gray-600 focus:text-gray-800 focus:outline-none hover:text-gray-800"
            onClick={onClickDropdown}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

*/