"use client"
import Header from "../Componenets/header";
import Footer from "../Componenets/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Contact() {
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
        className="fixed w-24 h-24 bg-orange-500 rounded-full opacity-20 pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <Header />
      <h1 className="text-4xl text-[#10375C] text-center font-extrabold pt-[40px]">
        CONTACT ME
      </h1>

      {/* Contact Details Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] p-6">
        <motion.div
          className="bg-slate-100 p-8 rounded-lg shadow-lg text-center max-w-md w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-extrabold text-[#10375C] mb-6">
            Let's Connect!
          </h2>
          <p className="text-[#10375C] mb-8">
            Looking for help to expand your business with a strong digital presence? Feel free to reach out!
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div>
              <h3 className="text-sm font-semibold  text-orange-500 mb-2">Email</h3>
              <div className="flex items-center justify-center">
                <i className="fa-solid fa-envelope text-[#10375C] text-lg mr-3"></i>
                <p className="text-sm text-[#10375C]">kinzaaftab16@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-sm font-semibold text-orange-500 mb-2">Phone</h3>
              <div className="flex items-center justify-center">
                <i className="fa-solid fa-phone text-[#10375C] text-lg mr-3"></i>
                <p className="text-sm text-[#10375C]">03112992642</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <h3 className="text-sm font-semibold  text-orange-500  mb-2">LinkedIn</h3>
              <div className="flex items-center justify-center">
                <i className="fa-brands fa-linkedin text-[#10375C] text-lg mr-3"></i>
                <p className="text-sm text-[#10375C]">Kinza Aftab</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
