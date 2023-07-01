/* eslint-disable no-unused-vars */
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className=" fixed w-full h-20 flex justify-between items-center px-5 lg:px-12 bg-[#0a192f] text-white mb-28">
      <ul>
        <li className="font-bold text-3xl">
          <Link to="home" smooth={true} duration={700}>
            DevTanvir
          </Link>
        </li>
      </ul>
      {/* main */}
      <ul className=" hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={700}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={700}>
            About
          </Link>
        </li>

        <li>
          <Link to="skills" smooth={true} duration={700}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={700}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={700}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="text-4xl py-4">
          <Link onClick={handleClick} to="home" smooth={true} duration={700}>
            Home
          </Link>
        </li>
        <li className="text-4xl py-4">
          <Link onClick={handleClick} to="about" smooth={true} duration={700}>
            About
          </Link>
        </li>
        <li className="text-4xl py-4">
          <Link onClick={handleClick} to="skills" smooth={true} duration={700}>
            Skills
          </Link>
        </li>
        <li className="text-4xl py-4">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={700}
          >
            Projects
          </Link>
        </li>
        <li className="text-4xl py-4">
          <Link onClick={handleClick} to="contact" smooth={true} duration={700}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            {/* <Link
            className="flex justify-between items-center w-full text-gray-300"
            to="https://www.linkedin.com/in/md-tanvir-hossain-khondoker-069856230/"
            >
            Linkedin
              <FaLinkedin size={30} />
            </Link> */}

            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/md-tanvir-hossain-khondoker-069856230/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            {/* <Link
            className="flex justify-between items-center w-full text-gray-300"
            to="https://github.com/Tanvir-khondoker"
            >
              Github
              <FaGithub size={30} />
            </Link> */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Tanvir-khondoker"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
