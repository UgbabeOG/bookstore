import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../data";
import Hamburger from "hamburger-react";
import { AuthContext } from "../context/AuthContext";
import { FaStarAndCrescent, FaSun } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const { currentUser, darkMode, handleDarkMode } = useContext(AuthContext);

  const location = useLocation();
  //   const headerLinks = [];
  // for (let index = 0; index < links.length-1; index++) {
  //if (links[index].title === "Store" && !currentUser) continue;
  // else headerLinks.push(links[index]);
  // }
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, [location]);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 z-10 w-full p-2 bg-indigo-400 dark:bg-slate-800">
      <div className="flex items-center justify-between p-2 ">
        <Link to={"/"} className="font-bold text-white">
          Bookave {open}
        </Link>
        <nav
          className={`absolute transition-all duration-300 md:relative w-full md:w-max top-full ${
            open ? "left-0" : "left-[110%] md:left-0"
          } flex-1 flex md:justify-center justify-start z-10 bg-indigo-400 dark:bg-slate-800 items-center`}
        >
          <ul className="flex flex-col w-full md:w-max md:flex-row md:gap-5">
            {links.map((link) => {
              if (link.text === "Store" && !currentUser) {
                return null;
              } else {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.link}
                      className="flex w-full p-2 text-xs text-white md:text-md hover:text-indigo-400 hover:bg-white"
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        <div className="grid items-center gap-2">
          <div
            onClick={handleClick}
            className="text-slate-50 flex  w-[30px] h-[30px] cursor-pointer  "
          >
            {darkMode ? (
              <FaStarAndCrescent
                onClick={handleDarkMode}
                className="text-white text-[16px]"
              />
            ) : (
              <FaSun
                className="text-white text-[16px]"
                onClick={handleDarkMode}
              />
            )}
            <Hamburger onToggle={true} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
