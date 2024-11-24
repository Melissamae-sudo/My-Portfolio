"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-blue-200">User Interface Designing</li>
        <li className="text-blue-300">User Experience</li>
        <li className="text-blue-400">Figma(Software)</li>
        <li className="text-purple-500">JavaScript</li>
        <li className="text-purple-400">NextJs</li>
        <li className="text-pink-300">Tailwind CSS</li>
        <li className="text-pink-400">React</li>
        <li className="text-pink-500">Java</li>
        <li className="text-pink-600">HTML & CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-purple-500">St Joseph Engineering College, Mangalore</li>
        <li className="text-pink-300">St Aloysius Pre-University College, Mangalore</li>
        <li className="text-pink-400">The Indian School,Bahrain</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-blue-200">Information Architecture (IA) Fundamentals, Alison</li>
        <li className="text-blue-300">The Complete Guide to UI/UX Wireframing, Alison</li>
        <li className="text-blue-400">A Complete Guide to User Experience Design, Alison</li>
        <li className="text-purple-500" >Fundamentals of Reinforcement Learning, University of Alberta</li>
        <li className="text-purple-400">Fundamentals of User Experience, Google</li>
        <li className="text-pink-300">Salesforce Administrator, SmartInternz</li>
        <li className="text-pink-400">Basics of Python, Infosys Springboard</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
           I’m passionate about people and I care about improving the quality of their lives through creating useful and usable products that everybody can enjoy. I’m a UI/UX designer who loves solving problems through effective design solution. Highly creative and detail-oriented in UI/UX designing.  Whether it's through developing new technology solutions or tackling fresh challenges, I'm dedicated to learning and making a difference. Let's connect and explore how we can learn from each other and work together to innovate and create lasting, positive change in the world!</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
