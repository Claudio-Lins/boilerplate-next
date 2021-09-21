import React, { useState } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import Dropdown from "./Dropdown";
import Link from "next/link";
import LogoMarca from "./logos/LogoMarca";
import IconDown from "./IconDown";
import IconClose from "./IconClose";
import IconBars from "./IconBars";
import { MenuItems } from "./MenuItems";

export default function NavbarBlog() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="bg-gray-50 border-b shadow flex sm:justify-evenly items-center h-[100px] sticky top-0 z-[1000]">
        <div className="flex items-center">
          <LogoMarca />
          <div className="menuIcon" onClick={handleClick}>
            {click ? <IconClose /> : <IconBars />}
          </div>
        </div>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((menu, index) => {
            return (
              <div className="header-link group" key={index}>
                <Link
                  href={menu.href}
                >
                  <a onClick={closeMobileMenu}>
                    <span className="span">{menu.title}</span>
                  </a>
                </Link>
                {/* <Link
                href={menu.link}>
                  <a onClick={closeMobileMenu}>
                    <span className="span">{menu.title}</span>
                  </a>
                </Link> */}
              </div>
            );
          })}

          {/* <div className="header-link group">
            <div
              className="hidden lg:flex items-center uppercase font-medium mx-auto text-sm text-white md:text-purple-600 z-10"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link href="/" passHref>
                <a
                  className="md:py-8 flex items-center"
                  onClick={closeMobileMenu}
                >
                  <span>DropDown</span>
                  <span className="hidden md:flex">
                    <IconDown />
                  </span>
                </a>
              </Link>
              {dropdown && <Dropdown />}
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
}
