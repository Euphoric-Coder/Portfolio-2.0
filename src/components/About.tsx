import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import { Download, ExternalLink } from "lucide-react";

const AboutHeader = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row justify-between items-center bg-bgColor text-textColor mt-20 px-8 py-16 lg:py-20 lg:px-20 shadow-2xl overflow-hidden"
      id="About"
    >
      {/* Text Section */}
      <div className="flex flex-col gap-6 lg:w-2/3 z-10">
        <h1 className="text-3xl lg:text-4xl font-semibold text-primaryColor">
          Hi, My name is
        </h1>
        <h2 className="p-2 text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Sagnik Dey
        </h2>
        <p className="text-[18px] md:text-2xl lg:text-3xl text-white flex items-center gap-1">
          I&apos;m&nbsp;
          <span className="text-[18px] md:text-2xl lg:text-3xl bg-gradient-to-r from-purple-400 via-green-400 to-indigo-500 text-transparent bg-clip-text font-semibold">
            <Typewriter
              options={{
                strings: [
                "a Full Stack Developer",
                "an Open-Source Contributor",
                  "a Freelancer",
                  "an iOS Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <p className="text-lg lg:text-xl text-textColor leading-relaxed text-justify font-montserrat">
          I&apos;m a tech enthusiast, passionate about learning and exploring
          the latest technologies. Currently, I&apos;m pursuing my journey in{" "}
          <span className="text-primaryColor font-bold">web development</span>{" "}
          and specializing in{" "}
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold">
            MERN Stack
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">
            Next.js
          </span>
          .
          <br />I also frequently dive into{" "}
          <span className="text-white font-semibold">iOS development</span>,
          working on innovative apps, and explore{" "}
          <span className="text-primaryColor font-semibold">React</span> for
          crafting interactive web applications.
        </p>
        <p className="text-lg lg:text-xl text-textColor leading-relaxed text-justify font-montserrat">
          Currently, I&apos;m honing my skills by building{" "}
          <span className="text-white font-semibold">
            a wide range of projects
          </span>{" "}
          just for fun, enhancing my knowledge, and tackling real-world
          challenges. My love for technology drives me to stay updated with{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text font-semibold">
            new trends in the tech world
          </span>{" "}
          and constantly learn new things.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          {/* View Resume Button */}
          <Button className="flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 hover:opacity-90 hover:scale-110 active:scale-95 transition-all duration-500 shadow-lg">
            <ExternalLink />
            <a
              href="https://drive.google.com/file/d/1lLC0ri7gc6k-r_biubdstB1vzM4g80yQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline"
            >
              View Resume
            </a>
          </Button>

          {/* Download Resume Button */}
          <Button className="flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 hover:opacity-90 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg">
            <Download size={32} />
            <a
              href="/Sagnik_Dey_Resume.pdf"
              download
              className="text-white no-underline"
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className="relative mt-10 lg:mt-0 lg:w-1/3 flex justify-center items-center z-10">
        <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-lg border-4 border-primaryColor">
          <img
            src="/profile.jpg"
            alt="Sagnik Dey Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
