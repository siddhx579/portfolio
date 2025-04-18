"use client";

import { useState, useEffect } from "react";
import {
    FaHtml5,
    FaCss3,
    FaJava,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
    title: "About Me",
    description:
        "I am a full stack developer with a passion for building scalable and efficient applications.",
    info: [
        { fieldName: "Name", fieldValue: "Siddhant Kapoor" },
        { fieldName: "Phone", fieldValue: "(+91) 8368731961" },
        { fieldName: "Experience", fieldValue: "11 months" },
        { fieldName: "Email", fieldValue: "siddhantkapoor579@gmail.com" },
        { fieldName: "Nationality", fieldValue: "Indian" },
        { fieldName: "Languages", fieldValue: "English, Hindi" },
    ],
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
        "Currently no professional experience — actively working on real-world projects and building skills through self-driven development. Do check out my work!",
    items: [
        {
            company: "Tech Solutions",
            position: "Full Stack Developer",
            duration: "Jan 2020 - Present",
        },
        {
            company: "ABC Corporation",
            position: "Junior Developer",
            duration: "Jun 2019 - Dec 2019",
        },
    ],
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    items: [
        {
            institution: "Chandigarh University",
            degree: "Bachelor of Engineering",
            duration: "Aug 2022 - Jun 2026",
        },
        {
            institution: "DLF Public School",
            degree: "Senior Secondary",
            duration: "2021 - 2022",
        },
        {
            institution: "DLF Public School",
            degree: "Secondary",
            duration: "2019 - 2020",
        },
    ],
};

const skills = {
    title: "My skills",
    description: "",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaPython />, name: "Python" },
    ],
};

const SkillTooltip = ({ icon, name }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => setShowTooltip(false), 2500);
            return () => clearTimeout(timer);
        }
    }, [showTooltip]);

    return (
        <li>
            <TooltipProvider delayDuration={100}>
                <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                    <TooltipTrigger
                        onClick={() => setShowTooltip(true)}
                        className="w-full h-[150px] bg-white/5 backdrop-blur-md rounded-xl flex justify-center items-center group focus:outline-none"
                    >
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {icon}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" sideOffset={10}>
                        <p className="capitalize">{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </li>
    );
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    {/* TAB LIST */}
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger className="bg-white/5 backdrop-blur-md" value="experience">
                            Experience
                        </TabsTrigger>
                        <TabsTrigger className="bg-white/5 backdrop-blur-md" value="education">
                            Education
                        </TabsTrigger>
                        <TabsTrigger className="bg-white/5 backdrop-blur-md" value="skills">
                            Skills
                        </TabsTrigger>
                        <TabsTrigger className="bg-white/5 backdrop-blur-md" value="about">
                            About me
                        </TabsTrigger>
                    </TabsList>

                    {/* TAB CONTENT */}
                    <div className="min-h-[70vh] w-full overflow-y-auto">
                        {/* EXPERIENCE */}
                        <TabsContent value="experience">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    {experience.description}
                                </p>
                                {/* {experience.items.length > 0 && (
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-white/5 backdrop-blur-md h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                )} */}
                            </div>
                        </TabsContent>

                        {/* EDUCATION */}
                        <TabsContent value="education">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-white/5 backdrop-blur-md h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* SKILLS */}
                        <TabsContent value="skills">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    {skills.description && (
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {skills.description}
                                        </p>
                                    )}
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => (
                                        <SkillTooltip key={index} icon={skill.icon} name={skill.name} />
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* ABOUT */}
                        <TabsContent value="about">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl break-words">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;