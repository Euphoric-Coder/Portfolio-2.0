import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Palette, Server } from "lucide-react";
import TechStack from "./TechStack";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: {
    name: string;
    expertise: string; // Changed from percentage to expertise level
  }[];
}

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", expertise: "Advanced" },
        { name: "TypeScript", expertise: "Intermediate" },
        { name: "Tailwind CSS", expertise: "Advanced" },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", expertise: "Intermediate" },
        { name: "Express.js", expertise: "Intermediate" },
        { name: "RESTful APIs", expertise: "Advanced" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", expertise: "Advanced" },
        { name: "SQL", expertise: "Intermediate" },
        { name: "Firebase", expertise: "Intermediate" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-purple-900/20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>

        {/* TechStack Section */}
        <div className="mb-10">
          <TechStack />
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-gray-700/40 rounded-lg border border-gray-700 hover:border-purple-500/20 transition-all duration-300"
                  >
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-purple-400 text-sm bg-purple-500/20 py-1 px-3 rounded-full">
                      {skill.expertise}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
