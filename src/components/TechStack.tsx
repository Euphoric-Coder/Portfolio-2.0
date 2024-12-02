import React from 'react';
import { motion } from 'framer-motion';
import {
  Blocks,
  Database,
  FileJson,
  Globe,
  Layout,
  Trash,
  Server,
  Cpu,
  Cloud,
  Terminal,
  Palette,
  Code2,
  Laptop,
  Boxes
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ElementType;
  category: string;
  color: string;
}

const TechStack = () => {
  const technologies: TechItem[] = [
    // Frontend
    { name: 'React', icon: Blocks, category: 'Frontend', color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', icon: FileJson, category: 'Frontend', color: 'from-blue-500 to-indigo-500' },
    { name: 'Next.js', icon: Layout, category: 'Frontend', color: 'from-gray-500 to-gray-700' },
    { name: 'Tailwind CSS', icon: Palette, category: 'Frontend', color: 'from-teal-500 to-cyan-500' },
    { name: 'Redux', icon: Boxes, category: 'Frontend', color: 'from-purple-500 to-indigo-500' },

    // Backend
    { name: 'Node.js', icon: Server, category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', icon: Terminal, category: 'Backend', color: 'from-gray-600 to-gray-800' },
    { name: 'GraphQL', icon: Code2, category: 'Backend', color: 'from-pink-500 to-rose-500' },
    { name: 'REST APIs', icon: Globe, category: 'Backend', color: 'from-blue-500 to-violet-500' },

    // Database
    { name: 'MongoDB', icon: Database, category: 'Database', color: 'from-green-600 to-emerald-600' },
    { name: 'PostgreSQL', icon: Database, category: 'Database', color: 'from-blue-600 to-indigo-600' },
    { name: 'Redis', icon: Database, category: 'Database', color: 'from-red-500 to-rose-500' },

    // DevOps & Tools
    { name: 'Git', icon: Trash, category: 'Tools', color: 'from-orange-500 to-red-500' },
    { name: 'Docker', icon: Cpu, category: 'Tools', color: 'from-blue-400 to-cyan-400' },
    { name: 'AWS', icon: Cloud, category: 'Tools', color: 'from-yellow-500 to-orange-500' },
    { name: 'VS Code', icon: Laptop, category: 'Tools', color: 'from-blue-500 to-indigo-500' }
  ];

  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 blur-xl"></div>
      <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
        <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Tech Stack
        </h3>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="text-lg font-medium text-purple-300 mb-4"
              >
                {category}
              </motion.h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      <div className="relative flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${tech.color}`}>
                          <tech.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;