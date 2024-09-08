/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container p-10 grid grid-cols-1 md:grid-cols-2">
        <div className="leftCol flex items-center">
          <h1
            data-aos="zoom-in-right"
            className="text-white font-extrabold text-4xl md:text-5xl"
          >
            <span className="underline decoration-secondary underline-offset-8">
              CON
            </span>
            TACT ME
          </h1>
        </div>
        <div className="rightCol">
          <div
            data-aos="zoom-in-left"
            className="containerContact mt-5 md:mt-0 rounded-2xl bg-[#fff] p-2 md:p-5 grid grid-cols-1 md:grid-cols-2"
          >
            <div className="email ">
              <h1 className="text-4xl font-extrabold">EMAIL</h1>
              <p className="md:mt-5 md:text-xl font-bold">
                romirahman03romi@gmail.com
              </p>
            </div>
            <div className="socialMedia mt-3 md:mt-0">
              <h1 className="text-4xl font-extrabold">Social Media</h1>
              <div className="itemSosmed flex md:mt-5">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <a href="https://www.linkedin.com/in/romirahman/">
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
      </div>
    </>
  );
}
