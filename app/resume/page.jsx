"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiRedux,
  SiReactquery,
  SiReacthookform,
  SiMongodb,
  SiMongoose,
  SiStyledcomponents,
  SiChakraui,
  SiTailwindcss,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Curious and innovative, I blend technical skills with creativity to build impactful software solutions that enhance user experience.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Prathamesh Dhere",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9324300279",
    },
    {
      fieldName: "Experience",
      fieldValue: "6 months",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "dhereprathamesh@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "Driven by curiosity and innovation, I combine technical expertise with creative thinking to develop impactful software solutions that enhance user experience.",
  items: [
    {
      company: "TechStalwarts Software Development LLP",
      position: "Jr React Developer Intern",
      duration: "02/2023 - 062023",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "My education blends foundational science with advanced IT studies, shaping my growth as a developer through both theory and practice.",
  items: [
    {
      institution: "Lovely Professional University (LPU), Online",
      position: "Master of Computer Applications (MCA)",
      duration: "2024 - present",
    },
    {
      institution: "Acharya and DK Marathe College(Mumbai, In)",
      position: "B.Sc.IT",
      duration: "2019 - 2022",
    },
    {
      institution: "Karmaveer Bhaurao Patil College(Navi Mumbai, In)",
      position: "HSC (12th) - Science",
      duration: "2018 - 2018",
    },
    {
      institution: "Mar Thoma School, Maharashtra(Mumabi, In)",
      position: "SSC (10th)",
      duration: "2015 - 2016",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proficient in frontend and backend development, I deliver responsive UIs and comprehensive full-stack solutions",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiReactquery />,
      name: "React Query",
    },
    {
      icon: <SiReacthookform />,
      name: "React Hook Form",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMongoose />,
      name: "Mongoose",
    },
    {
      icon: <SiStyledcomponents />,
      name: "Styled Components",
    },
    {
      icon: <SiChakraui />,
      name: "Chakra UI",
    },
    {
      icon: <SiTailwindcss />,
      name: "Material-UI (MUI)",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
  ],
};

const Resume = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{
    //     opacity: 1,
    //     transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    //   }}
    //   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    // >
    //   resume
    // </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 md:py-16 xl:py-2"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillsList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 gap-y-6 max-w[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
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

// import React from "react";

// const page = () => {
//   return <div>Resume</div>;
// };

// export default page;
