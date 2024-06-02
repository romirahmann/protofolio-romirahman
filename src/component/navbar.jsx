/* eslint-disable no-unused-vars */
"use client";
import { Navbar } from "flowbite-react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition + 50 &&
          section.offsetTop + section.offsetHeight > scrollPosition + 50
        ) {
          const currentId = section.attributes.id.value;
          removeAllActiveClasses();
          addActiveClass(currentId);
        }
      });
    };

    const removeAllActiveClasses = () => {
      document
        .querySelectorAll(".navItem")
        .forEach((el) => el.classList.remove("active"));
    };

    const addActiveClass = (id) => {
      document.querySelector(`a[href="#${id}"]`).classList.add("active");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <Navbar fluid className=" bg-transparant mx-5 md:mx-16">
          <Navbar.Brand>
            <span className="text-[#DBFF00] self-center whitespace-nowrap text-xl font-semibold ">
              MY PORTOFOLIO
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <a href="#home" className="active navItem">
              HOME
            </a>
            <a href="#service" className="navItem">
              SERVICES
            </a>
            <a href="#portofolio" className="navItem">
              PORTOFOLIO
            </a>
            <a href="#about" className="navItem">
              ABOUT
            </a>
            <a href="#contact" className="navItem">
              CONTACT
            </a>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
