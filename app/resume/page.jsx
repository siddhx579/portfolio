"use client";

import { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaJava, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython, FaGithub, FaDiscord, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiSupabase, SiMongodb, SiPrisma, SiTypescript, SiFramer, SiExpress, SiFirebase, SiPostgresql, SiVercel, SiIntellijidea, SiNpm, SiVite, SiArduino, SiPycharm } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Currently no professional experience — actively working on real-world projects and building skills through self-driven development. Do check out my work!",
    items: [
        {
            company: "SAC - ISRO",
            position: "Web Developer",
            duration: "July 2025 - Present",
        },
        // {
        //     company: "ABC Corporation",
        //     position: "Junior Developer",
        //     duration: "Jun 2019 - Dec 2019",
        // },
    ],
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "",
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
    description: "Categorized by role for better clarity",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML5", category: "Frontend" },
        { icon: <FaCss3 />, name: "CSS3", category: "Frontend" },
        { icon: <FaJs />, name: "JavaScript", category: "Frontend" },
        { icon: <SiTypescript />, name: "TypeScript", category: "Frontend" },
        { icon: <FaReact />, name: "React", category: "Frontend" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", category: "Frontend" },
        { icon: <SiNextdotjs />, name: "Next.js", category: "Frontend" },
        { icon: <SiFramer />, name: "Framer Motion", category: "Frontend" },
        { icon: <FaVuejs />, name: "Vue.js", category: "Frontend" },
        { icon: <FaNodeJs />, name: "Node.js", category: "Backend" },
        { icon: <SiExpress />, name: "Express.js", category: "Backend" },
        { icon: <SiPrisma />, name: "Prisma", category: "Backend" },
        { icon: <SiSupabase />, name: "Supabase", category: "Backend" },
        { icon: <SiFirebase />, name: "Firebase", category: "Backend" },
        { icon: <SiMongodb />, name: "MongoDB", category: "Database" },
        { icon: <SiMysql />, name: "MySQL", category: "Database" },
        { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database" },
        { icon: <FaGitAlt />, name: "Git", category: "Tools" },
        { icon: <FaGithub />, name: "GitHub", category: "Tools" },
        { icon: <SiVercel />, name: "Vercel", category: "Tools" },
        { icon: <VscVscode />, name: "VS Code", category: "Tools" },
        { icon: <SiIntellijidea />, name: "Intellij Idea", category: "Tools" },
        { icon: <SiNpm />, name: "npm", category: "Tools" },
        { icon: <SiVite />, name: "Vite", category: "Tools" },
        { icon: <SiArduino />, name: "Arduino", category: "Tools" },
        { icon: <FaDiscord />, name: "Discord", category: "Tools" },
        { icon: <SiPycharm />, name: "PyCharm", category: "Tools" },
        { icon: <FaJava />, name: "Java", category: "Languages" },
        { icon: <FaPython />, name: "Python", category: "Languages" },
        { icon: <TbBrandCpp />, name: "C++", category: "Languages" },
    ],
};

const SkillTooltip = ({ icon, name }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleTap = () => setShowTooltip(true);

    useEffect(() => {
        let timer;
        if (showTooltip) {
            timer = setTimeout(() => setShowTooltip(false), 2500);
        }
        return () => clearTimeout(timer);
    }, [showTooltip]);

    return (
        <li className="overflow-hidden">
            <TooltipProvider delayDuration={100}>
                <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                    <TooltipTrigger
                        onClick={handleTap}
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
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 overflow-x-hidden"
        >
            <div className="container mx-auto px-4">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
                        <TabsTrigger className="bg-white/5 backdrop-blur-md" value="experience">Experience</TabsTrigger>
                        <TabsTrigger className="bg-white/5 backdrop-blur-md" value="education">Education</TabsTrigger>
                        <TabsTrigger className="bg-white/5 backdrop-blur-md" value="skills">Skills</TabsTrigger>
                        <TabsTrigger className="bg-white/5 backdrop-blur-md" value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full overflow-hidden">
                        {/* EXPERIENCE */}
                        <TabsContent value="experience">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{experience.description}</p> */}
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
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
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
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
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
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>

                                {/* Inner Skills Tabs */}
                                <Tabs defaultValue="Frontend" className="w-full">
                                    <TabsList className="w-full mx-auto grid grid-cols-3 gap-2 max-w-sm xl:flex xl:flex-row xl:justify-start xl:max-w-none xl:mx-0">
                                        {["Frontend", "Backend", "Database"].map((category) => (
                                            <TabsTrigger key={category} value={category} className="capitalize bg-white/5 backdrop-blur-md">
                                                {category}
                                            </TabsTrigger>
                                        ))}

                                        {/* Wrap the last two in a full-width row and center them only on mobile */}
                                        <div className="col-span-3 flex justify-center gap-2 xl:flex xl:flex-row xl:justify-start xl:col-span-1 xl:gap-2">
                                            {["Tools", "Languages"].map((category) => (
                                                <TabsTrigger key={category} value={category} className="capitalize bg-white/5 backdrop-blur-md">
                                                    {category}
                                                </TabsTrigger>
                                            ))}
                                        </div>
                                    </TabsList>

                                    {["Frontend", "Backend", "Database", "Tools", "Languages"].map((category) => (
                                        <TabsContent key={category} value={category}>
                                            {/* <h4 className="text-2xl font-semibold mt-4 mb-4 text-accent">{category}</h4> */}
                                            <ul className="grid grid-cols-2 mt-8 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                                {skills.skillList
                                                    .filter((skill) => skill.category === category)
                                                    .map((skill, index) => (
                                                        <SkillTooltip key={index} icon={skill.icon} name={skill.name} />
                                                    ))}
                                            </ul>
                                        </TabsContent>
                                    ))}
                                </Tabs>
                            </div>
                        </TabsContent>

                        {/* ABOUT */}
                        <TabsContent value="about">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">About Me</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    I&apos;m a Computer Science student and a passionate full-stack web developer focused on building impactful, real-world applications. With a strong foundation in the MERN stack, I&apos;ve developed several projects including a Spotify clone, an AI-powered resume builder (ResumeMint), a Discord-style messaging app, and a real estate listing platform.</p>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    I love combining clean UI with smooth animations using tools like Tailwind CSS and Framer Motion, and I&apos;m always experimenting with frameworks like Next.js and Clerk for authentication and edge-ready apps. I thrive on learning fast, solving problems, and turning ideas into elegant digital solutions.</p>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    I&apos;m currently looking for opportunities to collaborate, learn, and grow by contributing to projects that make a difference.
                                </p>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;