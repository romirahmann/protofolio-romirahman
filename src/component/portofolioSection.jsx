/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import projects from "./../database/project.json";
import "./../assets/style/navbar.css";

// animasi
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalPorto from "./reUse/modalPorto";

export default function PortofolioSection() {
  const [projectCategories, setProjectCategories] = useState(projects);
  const [activeCategory, setActiveCategory] = useState("All");
  const [scaleImg, setScaleImg] = useState();
  const [statusModal, setStatusModal] = useState(false);
  const [id_porto, setId] = useState(null);

  const getProjectByCategory = (category, data) => {
    setProjectCategories(projects.filter((item) => item.category === category));
    setActiveCategory(category);
  };

  const openModal = (data) => {
    setStatusModal(true);
    setId(data);
  };

  const grayscaleStyle = {
    filter: "grayscale(100%)",
    transition: "filter 0.3s ease-in-out",
  };
  const normalStyle = {
    filter: "none",
    transition: "filter 0.3s ease-in-out",
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="container md:p-16">
        <h1
          data-aos="fade-up"
          className="text-6xl font-bold tracking-[-2px] text-center text-[#fff]"
        >
          My Project
        </h1>
        <p
          data-aos="fade-up"
          className="text-center md:mx-40 text-sm  md:text-xl my-8 text-gray-400"
        >
          Welcome to my project showcase, where you can explore a diverse
          collection of my work as a passionate Frontend Developer and Fullstack
          Developer. Each project reflects my dedication to crafting seamless
          user experiences, efficient backend solutions, and innovative web
          applications.
        </p>
        <div data-aos="fade-up" className="navProject text-center md:mt-10">
          <button
            id="btn_filter"
            onClick={() => {
              setProjectCategories(projects);
              setActiveCategory("All");
            }}
            className={`mx-2 font-bold text-white text-2xl ${
              activeCategory === "All" ? "active" : ""
            }`}
          >
            All
          </button>
          <button
            id="btn_filter"
            onClick={() => getProjectByCategory(1)}
            className={`mx-2 font-bold text-white text-2xl ${
              activeCategory === 1 ? "active" : ""
            }`}
          >
            FrontEnd
          </button>
          <button
            id="btn_filter"
            onClick={() => getProjectByCategory(2)}
            className={`mx-2 font-bold text-white text-2xl ${
              activeCategory === 2 ? "active" : ""
            }`}
          >
            FullStack
          </button>
        </div>
        <div
          data-aos="fade-up"
          className="container-project md:mt-12 grid grid-cols-1 md:grid-cols-3"
        >
          {projectCategories.map((project, index) => (
            <button
              key={index}
              onClick={() => {
                openModal(project.id);
              }}
            >
              <motion.div
                className="project1 rounded-2xl bg-[#fff] m-5 p-2 flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }} // Animasi awal saat muncul
                animate={{ opacity: 1, scale: 1 }} // Animasi saat muncul
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <img
                  src={project.thumbnail}
                  alt=""
                  scale={scaleImg}
                  style={grayscaleStyle}
                  className="rounded-2xl"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = normalStyle.filter;
                    setScaleImg(2);
                  }}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = grayscaleStyle.filter)
                  }
                />
              </motion.div>
            </button>
          ))}
        </div>
      </div>

      <div className="testing">
        <ModalPorto
          statusModal={statusModal}
          setStatusModal={setStatusModal}
          portoId={id_porto}
        />
      </div>
    </>
  );
}
