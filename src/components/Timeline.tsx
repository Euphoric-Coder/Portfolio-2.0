import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, GraduationCap, Award, MapPin } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  location?: string;
  achievements?: string[];
  index: number;
  type: 'education' | 'experience';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  subtitle, 
  description, 
  location,
  achievements,
  index,
  type
}) => {
  const variants = {
    hidden: { opacity: 0, x: type === 'education' ? 50 : -50 },
    visible: { opacity: 1, x: 0 }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      variants={variants}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      <div className="flex items-center mb-1 sm:mb-0">
        <div className="absolute left-0 sm:left-24 top-8 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-20"></div>
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 font-medium text-xl bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          <Calendar className="w-4 h-4 text-purple-400" />
          {year}
        </motion.div>
      </div>

      <div className="relative">
        <motion.div 
          className="absolute -left-8 sm:-left-9 top-3"
          variants={iconVariants}
        >
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              {type === 'education' ? (
                <GraduationCap className="w-3 h-3 text-white" />
              ) : (
                <Building2 className="w-3 h-3 text-white" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-500/10 hover:border-purple-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-4 mb-3">
            <div className="flex items-center gap-2 text-purple-300">
              <Award className="w-4 h-4" />
              <span className="font-medium">{subtitle}</span>
            </div>
            {location && (
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-300 mb-4">{description}</p>
          
          {achievements && achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Achievements:</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-purple-400 mt-1">•</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ExperienceTimeline = () => (
  <div className="relative space-y-8">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-pink-900/20 to-purple-900/20 blur-3xl -z-10"></div>
    {[
      {
        year: "2023 - Present",
        title: "Software Development Intern",
        subtitle: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        description: "Collaborated with senior developers on various web applications using modern JavaScript frameworks.",
        achievements: [
          "Developed and maintained responsive web applications using React and TypeScript",
          "Implemented new features that improved user engagement by 25%",
          "Participated in code reviews and contributed to team documentation"
        ]
      },
      {
        year: "2022 - 2023",
        title: "Web Development Intern",
        subtitle: "Digital Solutions Ltd.",
        location: "Remote",
        description: "Gained hands-on experience in frontend development and modern web technologies.",
        achievements: [
          "Built and maintained client websites using React and Tailwind CSS",
          "Optimized website performance improving load times by 40%",
          "Collaborated with design team to implement pixel-perfect UI components"
        ]
      }
    ].map((item, index) => (
      <TimelineItem key={index} {...item} index={index} type="experience" />
    ))}
  </div>
);

export const EducationTimeline = () => (
  <div className="relative space-y-8">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-pink-900/20 to-purple-900/20 blur-3xl -z-10"></div>
    {[
      {
        year: "2020 - 2024",
        title: "Bachelor of Computer Science",
        subtitle: "Tech University",
        location: "New York, NY",
        description: "Major in Software Engineering with focus on Web Technologies and Cloud Computing.",
        achievements: [
          "Dean's List for Academic Excellence (All Semesters)",
          "Led team project developing a cloud-based learning platform",
          "Published research paper on modern web development practices"
        ]
      },
      {
        year: "2018 - 2020",
        title: "Associate Degree in Computer Science",
        subtitle: "Community College",
        location: "Boston, MA",
        description: "Foundation studies in programming and computer science principles.",
        achievements: [
          "Graduated with High Honors (3.9 GPA)",
          "President of Computer Science Club",
          "Won first place in college coding competition"
        ]
      }
    ].map((item, index) => (
      <TimelineItem key={index} {...item} index={index} type="education" />
    ))}
  </div>
);