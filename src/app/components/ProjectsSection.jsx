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
    description: "A cinema booking app design featuring a user-friendly interface allows users to reserve seats for movies, view showtimes, and obtain digital tickets seamlessly.",
    image: "/images/cinema.jpeg",
    tag: ["Projects"],
    figmaUrl: "https://www.figma.com/community/file/1413802606243073240/bookmovies" // Add Figma URL here
  },
  {
    id: 3,
    title: "Pick Me",
    description: "Helps users create, organize, and manage tickets for issues efficiently, making it easy to track and resolve problems",
    image: "/images/ticket.jpg",
    tag: ["Projects"],
    gitUrl: "https://github.com/Melissamae-sudo/Pick-Me-App",
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
