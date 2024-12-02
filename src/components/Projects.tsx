import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      longDescription: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=600&h=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2023",
      role: "Full Stack Developer",
      features: [
        "User authentication and authorization",
        "Real-time inventory tracking",
        "Secure payment processing with Stripe",
        "Admin dashboard for order management",
        "Responsive design for all devices"
      ]
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with collaborative features",
      longDescription: "A collaborative task management application that enables teams to organize and track their projects in real-time. Built with React and Firebase for seamless real-time updates.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=400",
      tags: ["React", "Firebase", "Tailwind", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2023",
      role: "Frontend Developer",
      features: [
        "Real-time collaboration",
        "Drag and drop task organization",
        "Team chat and comments",
        "File attachments",
        "Progress tracking and analytics"
      ]
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio creation tool for developers",
      longDescription: "A tool that helps developers create and maintain their professional portfolios with ease. Features include customizable templates, markdown support, and automatic deployment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
      tags: ["TypeScript", "React", "AWS", "Next.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      role: "Lead Developer",
      features: [
        "Custom template creation",
        "Markdown content support",
        "Automatic deployment to AWS",
        "SEO optimization",
        "Analytics dashboard"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900"></div>
      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;