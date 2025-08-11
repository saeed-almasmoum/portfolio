"use client";
// import { FaGitAlt,DiMongodb,SiMysql,TbBrandLaravel } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { MdOutlinePhp } from "react-icons/md";
import { TbBrandLaravel } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
// import { FaGitAlt } from "react-icons/fa";



// import { FaHtml5, FaPhp, FaLaravel, FaDatabase, FaGitAlt } from "react-icons/fa";
// import { SiMongodb, SiMysql } from "react-icons/si";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiReactquery,
} from "react-icons/si";
const about = {
  title: "About me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohammed Saeed Al Masmoum",
    },
    {
      fieldName: "Phone",
      fieldValue: "+963935280318",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Mohammed Saeed Al Masmoum",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Syrian",
    },
    {
      fieldName: "Email",
      fieldValue: "saeedhoms289@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic , English",
    },
  ],
};
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Developed and implemented web applications with a focus on user experience and performance optimization.",
  items: [
    {
      company: "Free Lancer",
      position: "Back-end Developer",
      duration: "2022 - Present",
    },

    {
      company: "Microtech",
      position: "Back-end Developer",
      duration: " 2022 – 2024",
    },

        {
      company: "Darbni",
      position: "Back-end Developer",
      duration: " 6-month",
    },
      {
      company: "PharmaParadise",
      position: "Back-end Developer",
      duration: " 2-month",
    },

      {
      company: "Edux",
      position: "Back-end Developer",
      duration: " 4-month",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I graduated with a degree in Software Engineering from Wadi International University (WIU), where I gained deep knowledge and hands-on experience in software development, algorithms, and data structures. The program also helped me strengthen my problem-solving and analytical thinking skills",
  items: [

    {
      institution: "Wadi Internationl University",
      degree: "Software Engineering",
      duration: "2020-2025",
    },

        {
      institution: "Participate in ICPC",
      degree: "Contestant on behalf of Wadi University",
      duration: "2022",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "Proficient in developing responsive and user-friendly web applications using PHP , LARAVEL .",
  skillsList: [
    {
      icon: <MdOutlinePhp />,
      name: "PHP",
    },
    {
      icon: <TbBrandLaravel />,
      name: "LARAVEL",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },

    {
      icon: <DiMongodb />,
      name: "MongoDB",
    },

        {
      icon: <FaGitAlt />,
      name: "Git",
    },


  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-4 xl:gap-[30px] gap-1">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
