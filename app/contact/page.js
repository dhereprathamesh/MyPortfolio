"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9324300279",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dhereprathamesh@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Chembur Mumbai, In",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // Displaying a toaster notification for demo purposes
    e.preventDefault();
    toast.error("Sorry, right now not working. You can use my Gmail ID.");
    // try {
    //   const response = await fetch("http://localhost:5000/send", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     alert("Message sent successfully");
    //     setFormData({
    //       firstname: "",
    //       lastname: "",
    //       email: "",
    //       phone: "",
    //       service: "",
    //       message: "",
    //     });
    //   } else {
    //     alert("Failed to send message");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  Excited to collaborate on MERN stack projects. Let's build
                  robust web applications together and turn your ideas into
                  reality!
                </p>

                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* select */}
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Full Stack Development">
                        Full Stack Development
                      </SelectItem>
                      <SelectItem value="Backend Development">
                        Backend Development
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textArea */}
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                />
                {/* button */}
                <Button size="md" className="max-w-40" type="submit">
                  Send message
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      <Toaster />
    </>
  );
};

export default Contact;
