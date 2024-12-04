"use client";

import { FaHtml5, FaCss3, FaJava, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si'

const about = {
    title: 'About Me',
    description: 'I am a full stack developer with a passion for building scalable and efficient applications.',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Siddhant Kapoor",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 8368731961",
        },
        {
            fieldName: "Experience",
            fieldValue: "Siddhant Kapoor",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Email",
            fieldValue: "siddhantkapoor579@gmail.com",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi",
        },
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "I am a full stack developer with a passion for building scalable and efficient applications.",
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
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "",
    items: [
        {
            institution: "Chandigarh University",
            degree: "Bachelor of Engineering",
            duration: "Aug 2022 - Jun 2026",
        },
        {
            institution: "DLF Public School",
            degree: "Higher Secondary",
            duration: "2021 - 2022",
        },
        {
            institution: "DLF Public School",
            degree: "Secondary",
            duration: "2019 - 2020",
        },
    ]
};

const skills = {
    title: "My skills",
    description: "",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
    ]
};

const Resume = () => {
    return (
        <div>resume page</div>
    )
};

export default Resume;