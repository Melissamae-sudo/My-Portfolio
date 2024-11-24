"use client"; 
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ATM Simulator",
    description: "A Java application that credits and debits money on a dummy Bank Account",
    image: "/images/atm.png",
    tag: ["Projects"],
  },
  {
    id: 2,
    title: "A Cinema Booking App Design",
    description: "A cinema booking app design featuring a user-friendly interface allows users to reserve seats for movies, view showtimes, and obtain digital tickets seamlessly using Figma",
    image: "/images/1727548237623.jpg",
    tag: ["Projects"],
    figmaUrl: "https://www.figma.com/community/file/1413802606243073240/bookmovies"
  },
  {
    id: 3,
    title: "Pick Me",
    description: "Helps users create, organize, and manage tickets for issues efficiently, making it easy to track and resolve problems",
    image: "/images/ticket.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/Melissamae-sudo/Pick-Me-App",
  },
  {
    id: 4,
    title: "Do Me List",
    description: " Track and complete to-do items with a clear overview of priorities and progress",
    image: "/images/dome.png",
    tag: ["Projects"],
    gitUrl: "https://www.figma.com/proto/pUmVliyIWpckLc36Z4iDFX/Mae-Music?page-id=0%3A1&node-id=64-45&node-type=canvas&viewport=472%2C110%2C0.06&t=bwVBtfl57hCrl2ZZ-1&scaling=scale-down&content-scaling=fixed",
  },
    {
    id: 5,
    title: "Mae Music",
    description: "A fictional music streaming company providing an ad-free platform with millions of songs. It converts visitors into signups for the ad-free platform",
    image: "/images/Screenshot 2024-10-06 124655.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/Melissamae-sudo/Do-Me-List",
  },
  {
    id: 6,
    title: "An Outfit generator",
    description: "A dynamic outfit generator built in Figma, featuring a model and customizable outfit options. Designed to help users visualize and experiment with styles, making it easy to find the perfect fit",
    image: "/images/Screenshot 2024-10-06 124655.png",
    tag: ["Projects"],
    gitUrl: "https://www.figma.com/design/XXKzosTCv7ppZrzMdwFTGy/outfit-generator?node-id=0-1&t=2MBb5RRm1oSa6dSU-1",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              figmaUrl={project.figmaUrl} 
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
