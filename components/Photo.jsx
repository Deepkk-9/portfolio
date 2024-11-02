"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="relative flex items-center justify-center"
            >
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                    }}
                    className="w-[298px] h-[298px] xl:w-[378px] xl:h-[378px] mix-blend-lighten absolute"
                >
                    <Image
                        src="/profile.png"
                        priority
                        quality={100}
                        fill
                        alt="alien"
                        className="object-contain"
                    />
                </motion.div>

                {/* circle */}
                <motion.svg
                    className="relative w-[350px] xl:w-[448px] h-[350px] xl:h-[448px]"
                    fill="transparent"
                    viewBox="0 0 456 456"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="228"          // Center X coordinate
                        cy="228"          // Center Y coordinate
                        r="222"           // Adjusted radius of the circle
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>


            </motion.div>
        </div>
    );
};

export default Photo;
