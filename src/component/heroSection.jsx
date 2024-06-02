import { useEffect } from "react";
import ButtonDownloadCv from "./buttonDownloadCv";
import TechStack from "./techStack";
import ButtonContact from "./buttonContactMe";
import "../assets/style/style.css";

import AOS from "aos";
import "aos/dist/aos.css";

// Library Animasi
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

/* eslint-disable react/no-unescaped-entities */
export default function HeroSection() {
  let downloadCv = () => {
    const pdfUrl = "/public/file/CV ATS - Romi Rahman.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV-Romi Rahman.pdf"; // Nama file yang diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  let contactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container h-screen p-0  text-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-5 md:p-0 p-5">
          <div className="leftHero md:p-20 mt-10" data-aos="fade-right">
            <h3 className="text-[#DBFF00] text-2xl md:text-4xl">Hi, I'm</h3>
            <h1 className="font-bold my-5  text-4xl md:text-6xl">
              <Typewriter
                options={{
                  strings: ["ROMI RAHMAN"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-7xl",
                  deleteSpeed: 50,
                  cursorClassName: "Typewriter__cursor text-secondary ",
                }}
              />
            </h1>
            <p className="text-[12px] my-5 tracking-wide md:text-sm opacity-70">
              As a final year student of IPB University Software Engineering
              Technology. I am very interested in technology, especially website
              development. I have gained significant experience as a full-stack
              web developer through internships or personal projects. I am used
              to working as a team or individually in website development.
            </p>
            <div className="btn flex palced-items-center mt-12">
              <div className="btn-cv">
                <ButtonDownloadCv functionClick={downloadCv} />
              </div>
              <div className="contact ms-5">
                <ButtonContact functionClick={contactMe} />
              </div>
            </div>
            <div className="techStack mt-10 " data-aos="fade-up">
              <TechStack />
            </div>
          </div>
          <div
            className="rightHero hidden md:grid justify-center"
            data-aos="zoom-in-left"
          >
            <img
              src="./../../public/img/hero-foto.png"
              className="w-[36em] max-w-full"
              alt=""
            />
            <div className="socialMedia flex justify-center">
              <motion.div whileHover={{ scale: 1.2 }}>
                <a href="https://www.linkedin.com/in/rr-mannn/">
                  <i className="fa-brands fa-linkedin text-[#0A66C2] text-4xl mx-2"></i>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <a href="https://www.instagram.com/rr.mannn">
                  <i className="fa-brands fa-square-instagram text-[#E4405F] mx-2 text-4xl"></i>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
