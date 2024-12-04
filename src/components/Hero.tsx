import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownCircle } from "lucide-react";
import Modal from "./ResumeModal"; // Reusable Modal component

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1B1464] via-[#0F044C] to-[#240046] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.3),transparent_40%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(219,39,119,0.3),transparent_40%)] z-0" />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center md:text-left">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Column - Text */}
          <motion.div variants={itemVariants}>
            <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-300 font-semibold">
                🌟 Aspiring Software Developer | AI/ML Enthusiast
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                Crafting Scalable
              </span>
              <br />
              <span className="text-white">Digital Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              I’m a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold">
                software engineering student
              </span>{" "}
              with a strong focus on{" "}
              <span className="text-white font-semibold">
                Full-Stack Development
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Artificial Intelligence/Machine Learning
              </span>
              . Currently honing my skills in{" "}
              <span className="text-purple-300">Next.js</span>,{" "}
              <span className="text-purple-300">React</span>, and{" "}
              <span className="text-purple-300">Node.js</span>, I strive to
              build innovative, scalable, and user-friendly applications.
            </p>

            <ul className="list-disc list-inside text-gray-400 text-left space-y-2 mb-6 pl-6">
              <li>
                Pursuing a degree in{" "}
                <span className="text-white font-semibold">
                  Computer Science
                </span>{" "}
                with a specialization in Full-Stack Development.
              </li>
              <li>
                Actively exploring the intersections of{" "}
                <span className="bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
                  AI/ML and Web Development
                </span>
                .
              </li>
              <li>
                Contributed to{" "}
                <span className="text-purple-300 font-semibold">
                  open-source projects
                </span>{" "}
                and collaborating with the developer community.
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <a href="#projects">View Projects</a>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href="/Sagnik_Dey_Resume.pdf"
                download="Sagnik_Dey_Resume"
                className="px-8 py-3 bg-white/10 rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition flex items-center justify-center"
              >
                Download CV
              </a>

              <motion.button
                type="button"
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-shadow"
              >
                View PDF
                <ArrowDownCircle className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div variants={itemVariants}>
            <div className="relative group">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="rounded-full border-4 border-white/10 object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all flex justify-center items-center rounded-full">
                <p className="text-white font-semibold">
                  Exploring the future of tech together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Modal for Viewing PDF */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </motion.section>
  );
};

export default Hero;
