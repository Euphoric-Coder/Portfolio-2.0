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
          image: "/C.png",
        },
        {
          name: "C++",
          color: "from-blue-500 to-indigo-500",
          image: "/C++.png",
        },
        {
          name: "HTML",
          color: "from-yellow-500 to-red-300",
          image: "/HTML.png",
        },
        {
          name: "CSS",
          color: "from-blue-300 to-purple-300",
          image: "/CSS.png",
        },
        {
          name: "JavaScript",
          color: "from-yellow-600 to-orange-500",
          image: "/JavaScript.png",
        },
        {
          name: "TypeScript",
          color: "from-blue-100 to-cyan-100",
          image: "/TypeScript.png",
        },
        {
          name: "Java",
          color: "from-red-200 to-orange-100",
          image: "/Java.png",
        },
        {
          name: "Python",
          color: "from-blue-400 to-green-400",
          image: "/Python.png",
        },
      ],
    },
    {
      name: "Technologies/Frameworks",
      technologies: [
        {
          name: "React.js",
          color: "from-blue-500 to-indigo-500",
          image: "ReactJS.png",
        },
        {
          name: "Express.js",
          color: "from-gray-500 to-gray-800",
          image: "ExpressJS.png",
        },
        {
          name: "Node.js",
          color: "from-green-500 to-emerald-500",
          image: "/NodeJS.png",
        },
        {
          name: "Tailwind CSS",
          color: "from-teal-200 to-blue-100",
          image: "Tailwind CSS.png",
        },
        {
          name: "Bootstrap",
          color: "from-purple-500 to-pink-500",
          image: "/Bootstrap.png",
        },
        {
          name: "Next.js",
          color: "from-gray-500 to-gray-900",
          image: "NextJS.png",
        },
        {
          name: "Vite",
          color: "from-purple-500 to-blue-500",
          image: "/Vite.png",
        },
      ],
    },
    {
      name: "Database",
      technologies: [
        {
          name: "MongoDB",
          color: "from-green-600 to-emerald-600",
          image: "/MongoDB.png",
        },
        {
          name: "MySQL",
          color: "from-blue-600 to-indigo-600",
          image: "/MySQL.png",
        },
        {
          name: "SQLite",
          color: "from-orange-500 to-red-500",
          image: "/SQLite.png",
        },
        {
          name: "PostgreSQL",
          color: "from-blue-500 to-purple-500",
          image: "/postgreSQL.png",
        },
      ],
    },
    {
      name: "Deployment",
      technologies: [
        {
          name: "Vercel",
          color: "from-black to-black",
          image: "/Vercel.png",
        },
        {
          name: "Netlify",
          color: "from-teal-100 to-blue-50",
          image: "/Netlify.png",
        },
        {
          name: "Render",
          color: "from-purple-500 to-pink-500",
          image: "/Render.png",
        },
      ],
    },
    {
      name: "Tools Used",
      technologies: [
        {
          name: "Vercel",
          color: "from-black to-black",
          image: "/Vercel.png",
        },
        {
          name: "Netlify",
          color: "from-teal-100 to-blue-50",
          image: "/Netlify.png",
        },
        {
          name: "Render",
          color: "from-purple-500 to-pink-500",
          image: "/Render.png",
        },
        {
          name: "AWS",
          color: "from-purple-500 to-pink-500",
          image: "/Render.png",
        },
      ],
    },
    {
      name: "Area of Interest",
      technologies: [
        {
          name: "Full-Stack Web Development",
          color: "from-gray-300 to-gray-500",
          image: "/Full Stack Web Development.png",
        },
        {
          name: "Front-End Development",
          color: "from-teal-100 to-blue-50",
          image: "/Front-End Development.png",
        },
        {
          name: "AI/ML Development",
          color: "from-purple-200 to-pink-200",
          image: "/AI or ML Engineer.png",
        },
        {
          name: "Data Scientist",
          color: "from-blue-200 to-cyan-200",
          image: "/Data Scientist.png",
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
        {/* <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
        </h3> */}

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
              <h4 className="text-lg md:text-xl lg:text-3xl font-semibold text-purple-300 mb-6 text-center">
                {category.name}
              </h4>

              {/* Technologies */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
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
