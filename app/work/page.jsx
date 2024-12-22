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
        image: '/assets/work/thumb1.png',
    
    },
    {
        num: "02",
        category: "mern stack",
        title: "Project 2",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda magnam eos numquam!",
    },
    {
        num: "03",
        category: "backend",
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nemo beatae. Natus voluptatibus ipsa ut?",
    },
];

const Work = () => {
    return (
        <div>work page</div>
    )
}

export default Work;