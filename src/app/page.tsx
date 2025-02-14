"use client";
import Image from "next/image";
import Header from "./Componenets/header";
import skillData from "./Data/data";
import Footer from "./Componenets/footer";
import Contact from "./Componenets/want";
import resume from "./resume.jpeg";
import { motion } from "framer-motion"; // Import Framer Motion for animations

export default function Home() {
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Circle floating animation
  const circleFloat = {
    float: {
      y: [0, -10, 0], // Moves up and down slightly
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Circle data (positions and delays)
  const circles = [
    { top: "10%", left: "10%", delay: 0 },
    { top: "20%", left: "80%", delay: 0.5 },
    { top: "70%", left: "20%", delay: 1 },
    { top: "80%", left: "70%", delay: 1.5 },
  ];

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <motion.div
        className="herosection bg-white w-full flex flex-col md:flex-row items-center justify-center py-8 md:py-16 px-4 md:px-8 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Multiple Small Moving Circles */}
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            className="absolute w-20 h-20 bg-[#FF6600] opacity-20 rounded-full "
            style={{
              top: circle.top,
              left: circle.left,
            }}
            variants={circleFloat}
            initial="hidden"
            animate="float"
            transition={{ delay: circle.delay }}
          />
        ))}

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left z-10"
          variants={fadeInUp}
        >
          <div className="text-[#10375C] max-w-[600px] mx-auto md:mx-0">
            <p className="text-3xl md:text-4xl font-medium text-[#FF6600]">
              HELLO, I'M
            </p>
            <p className="text-4xl md:text-5xl tracking-[5px] md:tracking-[10px] font-extrabold mt-2 text-[#10375C]">
              KINZA AFTAB
            </p>
            <p className="text-base md:text-lg font-thin text-[#10375C] mt-4">
              Passionate web developer with expertise in crafting dynamic and responsive websites. Skilled in modern technologies like React, Next.js, and Tailwind CSS to deliver user-centric solutions.
            </p>
          </div>
          <motion.div
            className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            variants={fadeInUp}
          >
            <a href="/contact">
              <button className="btnani2 shadow h-[45px] w-[150px] md:w-[200px] border-2 border-orange-600 text-base md:text-lg text-[#FF6600] rounded-[25px] hover:bg-[#FF6600] hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </a>
            <a href="/resume.pdf" download="Kinza_Aftab_Resume.pdf">
              <button className="btnani shadow h-[45px] w-[150px] md:w-[200px] border-2 border-[#10375C] text-base md:text-lg text-[#10375C] rounded-[25px] hover:bg-[#10375C] hover:text-white transition-all duration-300">
                Download CV
              </button>
            </a>  
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 z-10"
          variants={fadeIn}
        >
          <div className="photo w-full bg-cover bg-center"></div>
        </motion.div>
      </motion.div>

      {/* Rest of your code remains the same */}
      {/* About Section */}
      <motion.div
        className="second-section shadow-md w-full md:w-[90%] lg:w-[1000px] mx-auto bg-slate-100 rounded-xl mt-8 p-6 md:p-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-3xl md:text-4xl text-[#10375C] text-center font-extrabold">
          ABOUT ME
        </h1>
        <p className="text-base md:text-lg text-center mt-4 text-[#10375C] font-thin">
          I am Kinza Aftab, a dedicated front-end developer passionate about building responsive, user-centered designs. With expertise in HTML, CSS, JavaScript, and Tailwind CSS, I focus on creating interactive web applications. Currently exploring Next.js and dynamic styling, I continuously aim to expand my skills in modern web technologies and create impactful digital experiences.
        </p>
        <div className="flex justify-center mt-6">
          <a href="/about">
            <button className="btnani2 shadow h-[45px] w-[200px] border-2 border-orange-600 text-base md:text-lg text-[#FF6600] rounded-[25px] hover:bg-[#FF6600] hover:text-white transition-all duration-300">
              View More
            </button>
          </a>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="third-section bg-slate-100 mt-12 px-4 md:px-8 py-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h1 className="text-3xl md:text-4xl text-[#10375C] text-center font-extrabold">
          SKILLS & SERVICES
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skillData.map((IData, index) => (
            <motion.div
              key={index}
              className="shadow w-full md:w-[45%] lg:w-[30%] border-2 border-orange-600 rounded-2xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
              variants={fadeInUp}
            >
              <p className="text-center text-[#10375C] font-medium text-xl">
                {IData.tittle}
              </p>
              <p className="text-center mt-2 text-base text-[#10375C]">
                {IData.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="shadow w-full md:w-[90%] lg:w-[1000px] mx-auto bg-slate-100 rounded-xl mt-12 mb-8 p-6 md:p-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <p className="text-3xl md:text-4xl text-[#10375C] text-center font-extrabold">
          Want to??
        </p>
        <p className="text-lg md:text-xl text-[#FF6600] text-center font-medium mt-2">
          Expand Your Business with a Strong Digital Presence
        </p>
        <div className="flex justify-center mt-4">
          <a href="/contact">
            <button className="shadow btnani h-[45px] w-[200px] border-2 border-[#10375C] text-base md:text-lg text-[#10375C] rounded-[25px] hover:bg-[#10375C] hover:text-white transition-all duration-300">
              Contact Me
            </button>
          </a>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}