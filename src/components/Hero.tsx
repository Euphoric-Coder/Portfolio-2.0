import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 min-h-screen flex items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.2),transparent_40%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(219,39,119,0.2),transparent_40%)] z-0" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
                <span className="text-purple-300">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                  Crafting Innovative
                </span>
                <br />
                <span className="text-white">Digital Experiences</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                I&apos;m a{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-semibold">
                  passionate software developer
                </span>{" "}
                dedicated to building beautiful, scalable, and user-friendly{" "}
                <span className="text-white font-semibold">
                  web applications
                </span>
                . My expertise includes working with the{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-bold">
                  MERN Stack, Next.js, and iOS Development
                </span>
                .
              </p>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                I thrive on solving complex problems, creating impactful
                designs, and staying updated with{" "}
                <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-pink-300 text-transparent bg-clip-text">
                  the latest trends in technology
                </span>
                . Let&apos;s build something amazing together!
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  type="button"
                  onClick={() => alert("View Projects Clicked!")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center gap-2"
                >
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => alert("Download CV Clicked!")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/10 rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition"
                >
                  Download CV
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400"
                  alt="Profile"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto border-4 border-white/10 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
