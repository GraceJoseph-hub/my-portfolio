import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full flex justify-between sm:gap-6 items-center lg:px-28 pt-16">
      <div className="text-2xl text-[#FFc94b] font-bold px-4">JG</div>
      <div className="flex space-x-5">
        <a
          onClick={() => (window.location = "mailto:gracecjoseph5@gmail.com")}
          // href={``}
          className="hover:text-yellow-500"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/GraceJoseph-hub"
          className="hover:text-yellow-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/karisgee/"
          className="hover:text-yellow-500"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
}

export default Header;
