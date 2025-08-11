"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub , BsGitlab } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "Edux website",
    title: "project 1",
    description: "Flexible & Easy Use Dashboard For teacher And student Who Own Edux Website.",
    stack: [{ name: "PHP-Laravel" }, { name: "Mysql" }, { name: "Api" },{ name: "JWT" }, ],
    Image: "/assets/work/edux.png",
    live: "https://edux.site",
    github: "https://github.com/saeed-almasmoum/quiz-academy",
  },
  {
    num: "02",
    category: "PharmaParadise",
    title: "project 2",
    description: "Flexible location for pharmacies, warehouse managers and drivers.",
    stack: [{ name: "PHP-Laravel" }, { name: "Mysql" }, { name: "Api" },{ name: "JWT" }, ],
    Image: "/assets/work/pharma.jpg",
    live: "/",
    github: "/",
  },
  {
    num: "03",
    category: "microtech",
    title: "project 3",
    description: "Developed the back-end of an accounting web application using Laravel. The system includes features like journal entries, invoices, income/expense tracking, financial reports, and role-based access control, with a focus on data integrity and secure API design",
    stack: [{ name: "PHP-Laravel" }, { name: "Mysql" }, { name: "Api" },{ name: "JWT" }, { name: "email" },{ name: "whatsapp" } ],
    Image: "/assets/work/microtech.jpg",
    live: "/",
    github: "",
  },
];
export default function Work() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const cuurentIndex = swiper.activeIndex;
    setProject(projects[cuurentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center py-12 xl:px-0"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline text-transparent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent " key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGitlab className="text-white text-3xl group-hover:text-accent"></BsGitlab>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Gitlab repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center  ">
                      {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.Image}
                          fill
                          className="object-contain"
                          alt="project image"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              ></WorkSliderBtns>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
