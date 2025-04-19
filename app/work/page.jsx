"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Nestal",
        title: "Project 1",
        description: "It is a full-stack web application designed for house renting. It includes a front-end built with React.js and a back-end powered by Node.js and Express, with MongoDB as the database.",
        stack: [
            { name: "React.js" },
            { name: "Node.js" },
            { name: "MongoDB" },
        ],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "https://github.com/siddhx579/Nestal",
    },
    {
        num: "02",
        category: "MockMate",
        title: "Project 2",
        description: "It is an AI-powered mock interview platform designed to help job seekers prepare for real-world interviews by simulating interactive interview sessions. It provides AI-generated questions, live feedback, and performance evaluation, helping users refine their responses, boost confidence, and enhance their interview skills.",
        stack: [
            { name: "Next.js" },
            { name: "Gemini AI" },
            { name: "Drizzle ORM" },
        ],
        image: "/assets/work/thumb2.jpg",
        live: "https://mockmate-interviewer.vercel.app/",
        github: "https://github.com/siddhx579/ai-mock-interviewer",
    },
    {
        num: "03",
        category: "Spotify Clone",
        title: "Project 3",
        description: "This is a full-featured responsive Spotify clone built using the MERN stack (MongoDB, Express.js, React, and Node.js). The project aims to replicate core Spotify functionalities, allowing users to browse, play, and manage music content in a seamless and interactive interface.",
        stack: [
            { name: "React.js" },
            { name: "Node.js" },
            { name: "MongoDB" },
        ],
        image: "/assets/work/thumb3.jpg",
        live: "",
        github: "https://github.com/siddhx579/Spotify-Clone",
    },
    {
        num: "04",
        category: "NextTask",
        title: "Project 4",
        description: "It is a modern and advanced task management web application built with Next.js, Prisma, and Clerk authentication. It helps users manage tasks efficiently with a clean and intuitive UI.",
        stack: [
            { name: "Next.js" },
            { name: "Prisma" },
            { name: "Tailwind CSS" },
        ],
        image: "/assets/work/thumb4.jpg",
        live: "https://modern-tasknext.vercel.app/",
        github: "https://github.com/siddhx579/task-app",
    },
    {
        num: "05",
        category: "WriteFlow",
        title: "Project 5",
        description: "It is an AI-powered content generation platform designed to help creators and businesses generate high-quality text effortlessly. With real-time editing, customizable templates, and AI-driven assistance, WriteFlow enhances productivity and creativity.",
        stack: [
            { name: "Next.js" },
            { name: "Typescript" },
            { name: "Gemini API" },
            { name: "Prisma" },
        ],
        image: "/assets/work/thumb5.jpg",
        live: "https://ai-writeflow.vercel.app/",
        github: "https://github.com/siddhx579/ai-content-generator",
    },
    {
        num: "06",
        category: "Home Automation",
        title: "Project 6",
        description: "This project demonstrates how to create a home automation system using an ESP8266 microcontroller, the Blynk app, and a 4-channel relay. The setup allows you to control four different devices through the Blynk app on your smartphone.",
        stack: [
            { name: "Arduino" },
            { name: "Blynk" },
            { name: "NodeMCU" },
        ],
        image: "/assets/work/thumb6.jpg",
        live: "",
        github: "https://github.com/siddhx579/Home-Automation-using-ESP8266",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-4 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-7xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                            <p className="text-justify text-white/60 ">{project.description}</p>
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">{item.name}{index !== project.stack.length - 1 && ","}</li>;
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex flex-wrap items-center gap-4">
                                {project.live && (
                                    <Link target="_blank" href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                                {project.github && (
                                    <Link target="_blank" href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent " />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%] rounded-2xl">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[410px] relative group flex justify-center items-center bg-pink-50/20 rounded-2xl">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full rounded-2xl">
                                            <Image src={project.image} fill className="object-cover rounded-2xl" alt="project image" />
                                        </div>
                                    </div>
                                </SwiperSlide>;
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[30px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;