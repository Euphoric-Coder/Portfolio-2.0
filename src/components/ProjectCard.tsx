import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div 
        onClick={() => onOpenModal(project)}
        className="bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
      >
        <div className="relative overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex gap-4 mb-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-500/20 rounded-full backdrop-blur-sm hover:bg-purple-500/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5 text-purple-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-500/20 rounded-full backdrop-blur-sm hover:bg-purple-500/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5 text-purple-300" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;