"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 bg-white font-[sans-serif] tracking-wide shadow-md">
      <div className="relative flex flex-wrap justify-center px-10 py-3">
        {/* Mobile menu button */}
        <div onClick={handleMenuToggle} className="ml-auto flex lg:hidden">
          <button>
            <svg
              className="h-7 w-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } space-y-3 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-2/3 max-lg:bg-white max-lg:p-4 max-lg:shadow-md lg:flex lg:flex-row lg:gap-x-10`}
        >
          {/* Logo */}
          <li className="block px-3 max-lg:border-b max-lg:pb-4 lg:hidden">
            <a>
              <img src="/bubtlogo.png" alt="logo" className="w-36" />
            </a>
          </li>
          {/* Menu Items */}
          <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-[#007bff] hover:text-[#007bff]"
            >
              Home
            </a>
          </li>

          {/* Dropdown Example */}
          <li className="group relative uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              About cse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-5 z-50 block max-h-0 min-w-[250px] space-y-2 overflow-hidden bg-white px-6 shadow-lg transition-all duration-500 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6 group-hover:opacity-100 max-lg:top-8">
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  vision of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  mission of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  messages from the chairman
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  industry advisory panel
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  achievement
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  Why cse at bubt?
                </a>
              </li>
            </ul>
          </li>

          {/* Dropdown Example */}
          <li className="group relative uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              About cse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-5 z-50 block max-h-0 min-w-[250px] space-y-2 overflow-hidden bg-white px-6 shadow-lg transition-all duration-500 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6 group-hover:opacity-100 max-lg:top-8">
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  vision of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  mission of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  messages from the chairman
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  industry advisory panel
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  achievement
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  Why cse at bubt?
                </a>
              </li>
            </ul>
          </li>

          {/* Dropdown Example */}
          <li className="group relative uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              About cse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-5 z-50 block max-h-0 min-w-[250px] space-y-2 overflow-hidden bg-white px-6 shadow-lg transition-all duration-500 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6 group-hover:opacity-100 max-lg:top-8">
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  vision of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  mission of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  messages from the chairman
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  industry advisory panel
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  achievement
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  Why cse at bubt?
                </a>
              </li>
            </ul>
          </li>

          {/* Dropdown Example */}
          <li className="group relative uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              About cse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-5 z-50 block max-h-0 min-w-[250px] space-y-2 overflow-hidden bg-white px-6 shadow-lg transition-all duration-500 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6 group-hover:opacity-100 max-lg:top-8">
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  vision of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  mission of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  messages from the chairman
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  industry advisory panel
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  achievement
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  Why cse at bubt?
                </a>
              </li>
            </ul>
          </li>

          {/* Dropdown Example */}
          <li className="group relative uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              About cse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-5 z-50 block max-h-0 min-w-[250px] space-y-2 overflow-hidden bg-white px-6 shadow-lg transition-all duration-500 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6 group-hover:opacity-100 max-lg:top-8">
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  vision of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  mission of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  messages from the chairman
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  industry advisory panel
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  achievement
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  Why cse at bubt?
                </a>
              </li>
            </ul>
          </li>

          {/* Dropdown Example */}
          <li className="group relative uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              About cse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-5 z-50 block max-h-0 min-w-[250px] space-y-2 overflow-hidden bg-white px-6 shadow-lg transition-all duration-500 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6 group-hover:opacity-100 max-lg:top-8">
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  vision of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  mission of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  messages from the chairman
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  industry advisory panel
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  achievement
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  Why cse at bubt?
                </a>
              </li>
            </ul>
          </li>

          {/* Dropdown Example */}
          <li className="group relative uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              About cse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="ml-1 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-5 z-50 block max-h-0 min-w-[250px] space-y-2 overflow-hidden bg-white px-6 shadow-lg transition-all duration-500 group-hover:max-h-[700px] group-hover:pb-4 group-hover:pt-6 group-hover:opacity-100 max-lg:top-8">
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  vision of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  mission of cse
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  messages from the chairman
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  industry advisory panel
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  achievement
                </a>
              </li>
              <li className="border-b py-3">
                <a
                  href="javascript:void(0)"
                  className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
                >
                  Why cse at bubt?
                </a>
              </li>
            </ul>
          </li>

          <li className="uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              ALUMNI
            </a>
          </li>
          <li className="uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              gallery
            </a>
          </li>
          <li className="uppercase max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a
              href="javascript:void(0)"
              className="block text-[15px] font-semibold text-gray-600 hover:text-[#007bff]"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
