import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  color: string;
  image: string;
}

interface Category {
  name: string;
  technologies: TechItem[];
}

const TechStack = () => {
  const categories: Category[] = [
    {
      name: "Languages",
      technologies: [
        {
          name: "C",
          color: "from-cyan-500 to-blue-500",
          image: "/images/c.png",
        },
        {
          name: "C++",
          color: "from-blue-500 to-indigo-500",
          image: "/images/cpp.png",
        },
        {
          name: "HTML",
          color: "from-orange-500 to-red-500",
          image: "/images/html.png",
        },
        {
          name: "CSS",
          color: "from-blue-500 to-purple-500",
          image: "/images/css.png",
        },
        {
          name: "JavaScript",
          color: "from-yellow-500 to-orange-500",
          image: "/images/javascript.png",
        },
        {
          name: "TypeScript",
          color: "from-blue-400 to-cyan-500",
          image: "/images/typescript.png",
        },
        {
          name: "Java",
          color: "from-red-400 to-orange-400",
          image: "/images/java.png",
        },
        {
          name: "Python",
          color: "from-blue-400 to-green-400",
          image: "/images/python.png",
        },
      ],
    },
    {
      name: "Technologies/Frameworks",
      technologies: [
        {
          name: "React.js",
          color: "from-blue-500 to-indigo-500",
          image: "/images/react.png",
        },
        {
          name: "Express.js",
          color: "from-gray-500 to-gray-800",
          image: "/images/express.png",
        },
        {
          name: "Node.js",
          color: "from-green-500 to-emerald-500",
          image: "/images/nodejs.png",
        },
        {
          name: "Tailwind CSS",
          color: "from-teal-500 to-blue-500",
          image: "/images/tailwind.png",
        },
        {
          name: "Bootstrap",
          color: "from-purple-500 to-pink-500",
          image: "/images/bootstrap.png",
        },
        {
          name: "Next.js",
          color: "from-gray-500 to-gray-900",
          image: "/images/nextjs.png",
        },
        {
          name: "Vite",
          color: "from-purple-500 to-blue-500",
          image: "/images/vite.png",
        },
      ],
    },
    {
      name: "Database",
      technologies: [
        {
          name: "MongoDB",
          color: "from-green-600 to-emerald-600",
          image: "/images/mongodb.png",
        },
        {
          name: "MySQL",
          color: "from-blue-600 to-indigo-600",
          image: "/images/mysql.png",
        },
        {
          name: "SQLite",
          color: "from-orange-500 to-red-500",
          image: "/images/sqlite.png",
        },
        {
          name: "PostgreSQL",
          color: "from-blue-500 to-purple-500",
          image: "/images/postgresql.png",
        },
      ],
    },
    {
      name: "Deployment",
      technologies: [
        {
          name: "Vercel",
          color: "from-black to-gray-800",
          image: "/images/vercel.png",
        },
        {
          name: "Netlify",
          color: "from-teal-500 to-blue-500",
          image: "/images/netlify.png",
        },
        {
          name: "Render",
          color: "from-purple-500 to-pink-500",
          image: "/images/render.png",
        },
      ],
    },
  ];

  return (
    <section className="relative py-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 blur-3xl"></div>

      <div className="relative container mx-auto px-6">
        {/* Title */}
        <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
          My Tech Stack
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl shadow-lg p-8 border border-gray-800 hover:shadow-purple-500/50 transition-all"
            >
              {/* Category Title */}
              <h4 className="text-2xl font-semibold text-purple-300 mb-6 text-center">
                {category.name}
              </h4>

              {/* Technologies */}
              <div className="grid grid-cols-2 gap-6">
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center bg-white/5 rounded-xl p-4 border border-gray-700 hover:border-purple-500/20 transition-all"
                  >
                    <div
                      className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${tech.color}`}
                    >
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className="text-gray-300 text-center font-medium mt-2">
                      {tech.name}
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

export default TechStack;
