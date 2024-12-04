import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Calendar,
  User,
  Video,
  ChevronDown,
} from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const contentElement = document.getElementById("modal-content");
    if (contentElement) {
      setIsScrollable(
        contentElement.scrollHeight > contentElement.clientHeight
      );

      const handleScroll = () => {
        setHasScrolled(contentElement.scrollTop > 0);
      };

      contentElement.addEventListener("scroll", handleScroll);
      return () => contentElement.removeEventListener("scroll", handleScroll);
    }
  }, [project]);

  const handleScrollDown = () => {
    const contentElement = document.getElementById("modal-content");
    if (contentElement) {
      contentElement.scrollTo({
        top: contentElement.scrollTop + 100,
        behavior: "smooth",
      });
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-purple-500/20 rounded-2xl max-w-3xl w-full flex flex-col shadow-xl overflow-hidden"
          style={{ maxHeight: "90vh" }}
        >
          {/* Header Section */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-br from-purple-900 to-gray-900">
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              {project.title}
            </h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-contain"
            />
          </div>

          {/* Content Section */}
          <div
            id="modal-content"
            className="flex-1 overflow-y-auto p-6 relative"
          >
            {/* Scroll Indicator */}
            {isScrollable && !hasScrolled && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
                <motion.button
                  onClick={handleScrollDown}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="flex items-center justify-center p-2 rounded-full bg-purple-500/50"
                >
                  <ChevronDown className="w-6 h-6 text-white animate-bounce" />
                </motion.button>
              </div>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <User className="w-5 h-5" />
                <span>{project.role}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 hover:shadow-md hover:shadow-purple-500/50 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Key Features
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Section */}
          <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 border-t border-purple-500/20 flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors text-purple-300"
            >
              <Github className="w-5 h-5" />
              View Code
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-pink-500/20 rounded-full hover:bg-pink-500/30 transition-colors text-pink-300"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors text-blue-300"
            >
              <Video className="w-5 h-5" />
              Demo Video
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
