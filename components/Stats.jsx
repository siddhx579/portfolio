"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
    const [contributions, setContributions] = useState(0);

    const stats = [
        {
            num: 11,
            text: "months of experience",
        },
        {
            num: 22,
            text: "Projects completed",
        },
        {
            num: 10,
            text: "Technologies mastered",
        },
        {
            num: contributions,
            text: "Code commits",
        },
    ];

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const res = await fetch("/api/github");
                const data = await res.json();
                setContributions(data.total || 0);
            } catch (err) {
                console.error("Failed to fetch GitHub contributions", err);
            }
        };

        fetchContributions();
    }, []);

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p
                                className={`${item.text.length < 15
                                        ? "max-w-[100px]"
                                        : "max-w-[130px]"
                                    } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;