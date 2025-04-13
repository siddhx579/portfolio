"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+91) 8368731961",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "siddhantkapoor579@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "C4-902, Saviour Park, UP, India",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6 overflow-x-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row gap-10">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-6 sm:p-10 backdrop-blur-md bg-white/5 rounded-xl">
                            <h3 className="text-3xl sm:text-4xl text-accent">
                                Let&apos;s work together
                            </h3>
                            <p className="text-white/60 text-sm sm:text-base text-justify">
                                Got a project or idea you&apos;d like to discuss? Fill out the
                                form and let&apos;s bring it to life together!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Firstname" />
                                <Input type="text" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="tel" placeholder="Phone number" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Frontend Development</SelectItem>
                                        <SelectItem value="cst">Full Stack MERN Developer</SelectItem>
                                        <SelectItem value="mst">Project Collab</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />
                            <Button size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-8 sm:gap-10 w-full max-w-md">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-start gap-6">
                                    <div className="min-w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-white/5 backdrop-blur-md text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[24px] xl:text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white/60 text-sm sm:text-base">{item.title}</p>
                                        <h3 className="text-base sm:text-lg break-words whitespace-pre-wrap text-white">
                                            {item.description}
                                        </h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;