import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full flex justify-between items-center px-20 py-10">
      <div className="text-2xl font-bold">ID</div>
      <div className="flex space-x-5">
        <a
          href="mailto:gracecjoseph5@gmail.com"
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
