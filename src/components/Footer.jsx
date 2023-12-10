import React from "react";

const Footer = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-full bg-cyan-500 dark:bg-slate-800 text-white text-center py-3">
      &copy; Bookave. {new Date().getFullYear()} All rights reserved.
    </footer>
  );
};

export default Footer;
