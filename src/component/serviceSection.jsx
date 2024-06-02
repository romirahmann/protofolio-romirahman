/* eslint-disable no-unused-vars */
import ItemService from "./reUse/service";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Library Animasi
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Database
import project from "./../database/project.json";

export default function ServiceSection() {
  const [totalProject, setTotalProject] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setTotalProject(project.length);
    console.log(project);
  }, [totalProject]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const totalProjectByCategory = (category) => {
    return project.filter((item) => item.category === category).length;
  };

  return (
    <>
      <div
        ref={ref}
        data-aos="fade-up"
        className="container bg-[#0C0C17] p-0 text-white"
      >
        <div className="header grid grid-cols-1 md:grid-cols-2 p-20 ">
          <div className="font-bold">
            <h1
              data-aos="fade-right"
              className="text-5xl md:text-6xl -tracking-[2px] "
            >
              What Can I Do For
            </h1>
            <h1
              data-aos="fade-right"
              className="text-5xl -tracking-[2px] md:text-6xl underline underline-offset-8 decoration-secondary"
            >
              You Needs
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="completedProject bg-[#fff] mt-10 md:mt-0 self-end p-5 md:ms-auto md:me-auto rounded-2xl"
          >
            {inView ? (
              <CountUp
                end={totalProject}
                className="text-primary text-5xl font-bold -tracking-[3px]"
                duration={2.75}
              />
            ) : (
              <h1 className="text-primary text-5xl font-bold -tracking-[3px]">
                0
              </h1>
            )}{" "}
            <h2 className="text-black text-2xl font-bold -tracking-[1px] ">
              Project Completed
            </h2>
          </div>
        </div>
        <div className="content grid grid-cols-1 content-center md:mt-0 mt-5 p-5 md:p-16 md:grid-cols-2">
          <div
            data-aos="zoom-in-right"
            className="service2  md:m-10 mt-5 md:mt-0"
          >
            <ItemService
              title="FrontEnd Developer"
              total={totalProjectByCategory(1)}
              srcImg="./../../public/img/frontend.jpg"
            />
          </div>

          <div
            data-aos="zoom-in-left"
            className="service2 md:m-10 mt-5 md:mt-0"
          >
            <ItemService
              title="FullStack Developer"
              total={totalProjectByCategory(2)}
              srcImg="./../../public/img/frontend.jpg"
            />
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
