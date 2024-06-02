/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";

import { Modal, Tooltip } from "flowbite-react";
import { useEffect, useState } from "react";
import projects from "./../../database/project.json";

// IMPORT ANIMASI
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function ModalPorto({ statusModal, setStatusModal, portoId }) {
  const [porto, setPorto] = useState([]);
  const [techImg, setTechImg] = useState([]);
  const [repo, setRepo] = useState([]);
  const [images, setImages] = useState([]);

  const onOpenModal = (status) => {
    setStatusModal(status);
  };
  useEffect(() => {
    setPorto(projects.filter((project) => project.id === portoId));
  }, [portoId]);
  useEffect(() => {
    setTechImg(porto[0]?.techStack);
  }, [porto]);
  useEffect(() => {
    setRepo(porto[0]?.repository);
  }, [porto]);
  useEffect(() => {
    setImages(porto[0]?.img);
  }, [porto]);

  return (
    <>
      <Modal
        size="8xl"
        className="bg-[#fff] text-white"
        show={statusModal}
        onClose={() => onOpenModal(false)}
      >
        <div className="modal bg-[#000] rounded-2xl">
          <Modal.Header>
            {" "}
            <span className="text-white font-bold">Detail Project</span>{" "}
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6 grid grid-cols-1 md:grid-cols-3  md:p-6">
              <div className="swiper w-full md:col-span-2 justify-center content-center">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper "
                >
                  {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt="" className="w-full h-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="desc md:ms-10 md:p-0">
                <div className="title ">
                  <h1 className="text-xl md:text-2xl font-bold text-secondary">
                    Title Project
                  </h1>
                  <h1 className="md:text-xl mt-2 ms-2 font-medium">
                    {porto[0]?.title}
                  </h1>
                </div>
                <div className="description md:mt-5">
                  <h1 className="text-xl md:text-2xl font-bold text-secondary">
                    Description
                  </h1>
                  <h1 className="md:text-sm mt-2 ms-2 font-medium ">
                    {porto[0]?.description}
                  </h1>
                </div>
                <div className="techstack mt-2 md:mt-5">
                  <h1 className="text-xl md:text-2xl font-bold text-secondary">
                    Tech Stack
                  </h1>
                  <div className="img-tech py-2 w-80 gap-3 grid grid-cols-3 items-center">
                    {techImg?.map((item, index) => (
                      <img key={index} src={item} alt="" className="w-full" />
                    ))}
                  </div>
                </div>
                <div className="btn-link md:mt-5">
                  {repo?.map((item, index) => (
                    <div key={index} className="btn grid grid-cols-2 gap-1">
                      <Tooltip content="Front End" placement="left">
                        <a
                          href={item.front_end}
                          className="flex w-[12em] items-center justify-center bg-[#10101E] p-4 rounded-2xl"
                        >
                          <img
                            src="./../../../public/img/github.png"
                            className="w-4"
                            alt=""
                          />
                          <h1 className="font-bold text-md ms-3">GitHub</h1>
                        </a>
                      </Tooltip>
                      <Tooltip content="Backend" placement="right">
                        <a
                          href={item.back_end}
                          className="flex w-[12em] items-center justify-center bg-[#10101E] p-4 rounded-2xl"
                        >
                          <img
                            src="./../../../public/img/github.png"
                            className="w-4"
                            alt=""
                          />
                          <h1 className="font-bold text-md ms-3">GitHub</h1>
                        </a>
                      </Tooltip>

                      <a
                        href={item.live_dmeo}
                        className="flex cursor-pointer items-center justify-center bg-[#10101E] p-2 rounded-2xl"
                      >
                        <i className="fa-solid fa-rocket"></i>
                        <h1 className="font-bold text-md ms-3">Live Demo</h1>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
