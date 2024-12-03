import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "../types";
import { projects } from "../userData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const project = projects

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-gray-900 to-black opacity-90 animate-pulse"></div>

      <div className="container mx-auto px-6 relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onOpenModal={setSelectedProject}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
