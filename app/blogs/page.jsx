// app/blogs/page.jsx
"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
    {
        num: "01",
        title: "Mastering the Next.js App Router: A New Era of Routing",
        description: "Explore how the App Router in Next.js 13+ changes routing forever — with layouts, nested routes, and more.",
        href: "/blogs/01", // Dynamic route pointing to [template_id]
        tags: ["Next.js", "Routing"],
    },
    {
        num: "02",
        title: "How to Supercharge Your Web App with AI APIs",
        description: "Integrate AI with ease using Gemini or OpenAI APIs — complete with examples and use cases.",
        href: "/blogs/02", // Dynamic route pointing to [template_id]
        tags: ["AI", "APIs", "Fullstack"],
    },
    {
        num: "03",
        title: "Server Actions in Next.js 14: The Game Changer You Need to Know",
        description: "Understand Server Actions and how they simplify server-side logic in modern apps.",
        href: "/blogs/03", // Dynamic route pointing to [template_id]
        tags: ["Next.js 14", "Server"],
    },
    {
        num: "04",
        title: "From Prompt to Product: How I Built an AI Content Generator App",
        description: "A dev breakdown on creating an AI content app with Next.js, Clerk, and Tailwind.",
        href: "/blogs/04", // Dynamic route pointing to [template_id]
        tags: ["AI", "Next.js", "Projects"],
    },
];

const Blogs = () => {
    return (
        <section className="min-h-[80vh] py-12 bg-background text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                >
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.06, y: -4 }}
                            transition={{ duration: 0.07, ease: "easeInOut" }}
                            className="h-[320px] flex flex-col justify-between rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-md hover:shadow-2xl transition-all duration-200"
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-white">{blog.title}</h3>
                                <p className="text-sm text-white/70 line-clamp-3 text-justify">{blog.description}</p>
                            </div>
                            <div className="flex justify-between items-end mt-4">
                                <div className="flex gap-2 flex-wrap text-xs text-accent">
                                    {blog.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-white/10 px-2 py-1 rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={`/blogs/${blog.num}`} // Correct link to dynamic route
                                    className="flex items-center gap-1 text-accent hover:underline text-sm"
                                >
                                    Read More <BsArrowRight />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;