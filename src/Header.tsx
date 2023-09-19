import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 py-[2px] px-1 shadow-sm shadow-cyan-500 ">
      <div className="max-w-7xl mx-auto container px-4 md:px-0 flex justify-between items-center text-gray-200">
        <div className="flex items-center">
          <h1 className="font-arvo text-3xl font-bold">My Thing</h1>
          <button
            className={`${isOpen ? 'ml-2 shadow-inner bg-slate-800' : 'ml-3  shadow-sm bg-slate-900'}  p-[1.5px] rounded  shadow-cyan-900 scale-110 md:hidden`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 6H5v2h14V6zm0 5H5v2h14v-2zm0 5H5v2h14v-2zM3 6h1v2H3V6zm0 5h1v2H3v-2zm0 5h1v2H3v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block space-x-0 text-xl font-lato`}
        >
          
          <div className='rounded transition-all duration-200 ease user-select-none cursor-pointer inline shadow-xs shadow-black  hover:font-bold border-r border-b hover:shadow-inner hover:shadow-cyan-900 border-gray-700 px-3 py-5 border-l'>
            <a href="#me">Me</a>
          </div> 
          
          <div className='rounded transition-all duration-200 ease user-select-none cursor-pointer inline shadow-xs shadow-black  hover:font-bold border-r border-b hover:shadow-inner hover:shadow-cyan-900 border-gray-700 px-3 py-5'>
            <a href="#resume">Re</a>sume
          </div> 
          
          <div className='rounded transition-all duration-200 ease user-select-none cursor-pointer inline shadow-xs shadow-black  hover:font-bold border-r border-b hover:shadow-inner hover:shadow-cyan-900 border-gray-700 px-3 py-5'>
            <a href="#projects">Pr</a>ojects
          </div> 
          
          <div className='rounded transition-all duration-200 ease user-select-none cursor-pointer inline shadow-xs shadow-black  hover:font-bold border-r border-b hover:shadow-inner  hover:shadow-cyan-900 border-gray-700 px-3 py-5'>
            <a href="#misc">Mi</a>sc
          </div> 
          
        </nav>
      </div>
    </header>
  );
}
