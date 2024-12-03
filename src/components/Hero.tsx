import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.2),transparent_40%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(219,39,119,0.2),transparent_40%)] z-0" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center md:text-left">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Column - Text */}
          <motion.div variants={itemVariants}>
            <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-300 font-semibold">
                🚀 Elevate Your Digital Presence
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                Building Futuristic
              </span>
              <br />
              <span className="text-white">Web Applications</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              I’m a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold">
                creative software developer
              </span>{" "}
              specializing in{" "}
              <span className="text-white font-semibold">
                full-stack development
              </span>
              , with a focus on{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                interactive user experiences
              </span>{" "}
              and scalable systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                type="button"
                onClick={() => alert("View Projects Clicked!")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-shadow"
              >
                View Projects
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
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400"
                alt="Profile"
                className="rounded-full border-4 border-white/10 object-cover shadow-lg"
              />
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
