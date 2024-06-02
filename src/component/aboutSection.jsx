/* eslint-disable no-unused-vars */
import ButtonDownloadCv from "./buttonDownloadCv";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import experiences from "./../database/experience.json";
import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="container bg-[#fff] rounded-xl md:rounded-[5em] p-2 md:p-16"
      >
        <div className="about grid md:grid-cols-2 grid-cols-1 ">
          <div className="profile flex flex-col items-center">
            <img
              data-aos="fade-up"
              src="/img/hero-foto.png"
              className="w-[20em] max-w-full"
              alt=""
            />
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-extrabold tracking-[-2px]"
            >
              Romi Rahman
            </h1>
            <h1
              data-aos="fade-up"
              className=" text-4xl md:text-5xl md:my-3 text-secondary bg-[#10101E] p-4 rounded-2xl font-extrabold tracking-[-1px]"
            >
              Web Developer
            </h1>
            <p data-aos="fade-up" className="text-center mx-2 my-4 md:mx-10">
              As a final year student of IPB University Software Engineering
              Technology. I am very interested in technology, especially website
              development. I have gained significant experience as a full-stack
              web developer through internships or personal projects. I am used
              to working as a team or individually in website development.
            </p>
            <div data-aos="fade-right" className="btn">
              <ButtonDownloadCv />
            </div>
            <div className="socialMedia mt-5 flex justify-center">
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
          <div data-aos="fade-left" className="experience flex justify-center">
            <div className="bg-[#10101E] p-5 md:p-0 rounded-2xl text-white">
              <h1 className="text-4xl md:p-5 font-extrabold">
                <span className=" decoration-secondary underline underline-offset-8">
                  EXPE
                </span>
                RIENCE
              </h1>
              <div className="dataExperience mt-5 md:mt-0 md:p-10">
                {experiences?.map((item, index) => (
                  <>
                    <div className="item mt-5 flex items-center">
                      <div className="w-3 h-3 md:w-5 md:h-5 bg-secondary rounded-[50%]"></div>
                      <p className="ms-3">
                        {" "}
                        <span className="font-bold uppercase">
                          {item.perusahaan}
                        </span>{" "}
                        - <span>{item.address}</span>
                      </p>
                    </div>
                    <p className="ms-8">
                      {" "}
                      {item.description} - ({item.start_date} - {item.end_date}){" "}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
