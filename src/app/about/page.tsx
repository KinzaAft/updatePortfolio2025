"use client";
import Header from "../Componenets/header";
import Footer from "../Componenets/footer";
import Link from "next/link";
import BtnData from "../Data/function";
import Contact from "../Componenets/want";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return; 
    const moveCircle = (e: MouseEvent) => {
      if (!circle) return; 
      const x = e.clientX - circle.offsetWidth / 2;
      const y = e.clientY - circle.offsetHeight / 2;
      circle.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", moveCircle);
    return () => window.removeEventListener("mousemove", moveCircle);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Circle */}
      <motion.div
        ref={circleRef}
        className="fixed w-12 h-12 md:w-24 md:h-24 bg-orange-500 rounded-full opacity-20 pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <Header />
      <div className="h-auto px-4 md:px-0">
        <motion.h1
          className="text-3xl md:text-4xl text-[#10375C] text-center font-extrabold pt-[20px] md:pt-[40px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT ME
        </motion.h1>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-[60px] p-4 md:p-[10px] w-full md:w-[700px] items-center justify-center md:justify-evenly mx-auto mt-[20px] rounded-xl border-2 border-darkBlue-400"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href="#personalInfo">
            <h4 className="text-lg md:text-xl text-[#10375C]hover:text-white-500 0 transition-colors">
              Personal Info
            </h4>
          </Link>
          <Link href="#Skills">
            <h4 className="text-lg md:text-xl text-[#10375C] hover:text-white-500 transition-colors">
              Skills
            </h4>
          </Link>
          <Link href="#qualification">
            <h4 className="text-lg md:text-xl text-[#10375C]hover:text-white-500  transition-colors">
              Qualification
            </h4>
          </Link>
        </motion.div>

        {/* Personal Info Section */}
        <motion.section
          id="personalInfo"
          className="shadow h-auto md:h-[350px] w-full md:w-[90%] lg:w-[1000px] mx-auto bg-slate-100 rounded-xl mt-[30px] p-6 md:p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-2xl md:text-3xl text-[#10375C] text-center font-extrabold pt-[20px] md:pt-[40px]">
            PERSONAL INFO
          </h1>
          <p className="text-base md:text-xl text-[#10375C] text-center mt-[20px] font-thin">
            Hi, I’m Kinza Aftab, a front-end developer focused on creating responsive, engaging web experiences. Currently, I’m expanding my expertise through the Governor IT Initiative and have completed the Bano Qabil program. I specialize in HTML, CSS, JavaScript, with a commitment to helping businesses grow digitally. My journey is driven by continuous learning and a passion for bringing creative visions to life online.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="Skills"
          className="shadow h-auto md:h-[350px] w-full md:w-[90%] lg:w-[1000px] mx-auto bg-slate-100 rounded-xl mt-[30px] p-6 md:p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl text-[#10375C] text-center font-extrabold pt-[20px] md:pt-[40px]">
            SKILLS
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-[20px]">
            {BtnData.map((bData, index) => (
              <motion.button
                key={index}
                className="h-[40px] w-[120px] md:h-[45px] md:w-[150px] border-2 border-orange-600 text-base md:text-xl text-[#10375C] rounded-xl font-bold hover:bg-orange-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {bData.tittle}
              </motion.button>
            ))}
          </div>
        </motion.section>

        <motion.section
  id="qualification"
  className="shadow h-auto md:h-[350px] w-full md:w-[90%] lg:w-[1000px] mx-auto bg-slate-100 rounded-xl mt-[30px] p-6 md:p-8"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  <h1 className="text-2xl md:text-3xl text-[#10375C] text-center font-extrabold pt-[20px] md:pt-[40px]">
    QUALIFICATION
  </h1>

  <div className="flex flex-col md:flex-row gap-6 mt-[10px] pb-5 text-center">
    {/* Education Details */}
    <div className="w-full md:w-[50%]">
      <h2 className="text-xl md:text-2xl text-orange-600 font-bold mb-4">Education</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg md:text-xl text-[#10375C] font-semibold">Matric Science</h3>
          <p className="text-base md:text-lg text-[#10375C]">MAJ Eng Medium School</p>
          <p className="text-base md:text-lg text-[#10375C]">2024</p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl text-[#10375C] font-semibold">Intermediate Computer Science</h3>
          <p className="text-base md:text-lg text-[#10375C]">Liaquat Govt. College</p>
          <p className="text-base md:text-lg text-[#10375C]">Present</p>
        </div>
      </div>
    </div>

    {/* Courses Details */}
    <div className="w-full md:w-[50%]">
      <h2 className="text-xl md:text-2xl text-orange-600 font-bold mb-4">Courses</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg md:text-xl text-[#10375C] font-semibold">Front-End Development</h3>
          <p className="text-base md:text-lg text-[#10375C]">Bano Qabil</p>
          <p className="text-base md:text-lg text-[#10375C]">June 2022 - Present</p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl text-[#10375C] font-semibold">Student Governor Initiative</h3>
          <p className="text-base md:text-lg text-[#10375C]">Governor House</p>
          <p className="text-base md:text-lg text-[#10375C]">May 2023 - Present</p>
        </div>
      </div>
    </div>
  </div>
</motion.section>

      </div>
      <Contact />
      <Footer />
    </div>
  );
}