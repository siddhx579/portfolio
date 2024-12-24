"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Project 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatum numquam qui temporibus, consequuntur minus?",
        stack: [
            { name: "HTML 5" },
            { name: "CSS 3" },
            { name: "Javascript" },
        ],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "mern stack",
        title: "Project 2",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda magnam eos numquam!",
        stack: [
            { name: "Next.js" },
            { name: "Tailwind.css" },
            { name: "Node.js" },
        ],
        image: "/assets/work/thumb2.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "backend",
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nemo beatae. Natus voluptatibus ipsa ut?",
        stack: [
            { name: "HTML" },
            { name: "Next.js" },
            { name: "Javascript" },
        ],
        image: "/assets/work/thumb3.png",
        live: "",
        github: "",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return (
        <motion.section initial={{opactiy: 0}} animate={{opacity: 1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className="text-white/60 ">{project.description}</p>
                            <ul>
                                {project.stack.map((item, index) => {
                                    return <li key={index}></li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%] ">slider</div>
                    <div className=""></div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;