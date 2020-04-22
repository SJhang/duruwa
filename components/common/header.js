import { useState } from "react";
import { isMobile } from 'react-device-detect';
import classNames from "classnames";
import Container from './container';
import Media from './media';

export default function Header({ hide }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickDropdown = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className={classNames("bg-gray-900", {"hidden": hide})}>
      <Container className="sm:flex sm:justify-between sm:py-5 sm:px-5 sm:items-center">
        <div className="flex item-center py-3 justify-between sm:p-0">
          <div className="text-white">
            <a href="#" >드루와컴퍼니</a>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-600 focus:text-white focus:outline-none hover:text-white"
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
        </div>
        <div className={classNames(
            "pt-2 pb-4 sm:flex sm:p-0",
            isOpen ? "block" : "hidden"
          )}
        >
          <a href="#" className="block text-white font-semibold hover:bg-gray-800 rounded py-1 sm:px-5">
            프리
          </a>
          <a
            href="#"
            className="block text-white font-semibold hover:bg-gray-800 rounded py-1 mt-1 sm:mt-0 sm:ml-2 sm:px-5"
          >
            편리
          </a>
          <a
            href="#"
            className="block text-white font-semibold hover:bg-gray-800 rounded py-1 mt-1 sm:mt-0 sm:ml-2 sm:px-5"
          >
            서비스
          </a>
        </div>
        <Media 
          className={classNames({ "hidden": isMobile })} 
          color="white" 
          size="2x"
        />
      </Container>
    </header>
  );
}
