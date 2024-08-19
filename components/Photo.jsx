"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Photo = () => {
  // State to track if the screen is large
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on component mount
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1200); // 1024px is the 'xl' breakpoint in Tailwind
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const circleRadius = isLargeScreen ? 250 : 290;

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="flex justify-center items-center relative"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute xl:transform xl:translate-x-4  xl:left-7"
        >
          <Image
            src="/assets/portfolioImg.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* circle */}

        <motion.svg
          className="w-[300px] xl:w-[586px] h-[300px] xl:h-[586px]"
          fill="transparent"
          viewBox="0 0 586 586"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="293"
            cy="293"
            r={circleRadius}
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
              duration: 20,
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
