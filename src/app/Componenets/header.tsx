'use client';

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Animation variants for the mobile menu
    const mobileMenuVariants = {
        open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        closed: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
    };

    // Animation for the logo
    const logoVariants = {
        hover: { scale: 1.1, transition: { duration: 0.2 } },
    };

    // Animation for navigation links
    const linkVariants = {
        hover: { scale: 1.1, color: "#EB8317", transition: { duration: 0.2 } },
    };

    // Opening animation for the header
    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.header
            className="navBar flex items-center h-[70px] bg-[#fff] text-[#000] font-medium justify-between px-5 md:px-[40px] shadow-sm"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Logo with animation */}
            <motion.div
                className="text-3xl font-medium text-[#EB8317] cursor-pointer"
                variants={logoVariants}
                whileHover="hover"
            >
                Port<span className="text-[#10375C] font-medium">folio</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-[90px] mr-[100px] text-[#10375C] font-medium text-[20px]">
                <Link href="/">
                    <motion.h3 className="options cursor-pointer" variants={linkVariants} whileHover="hover">
                        Home
                    </motion.h3>
                </Link>
                <Link href="/about">
                    <motion.h3 className="options cursor-pointer" variants={linkVariants} whileHover="hover">
                        About
                    </motion.h3>
                </Link>
                <Link href="/project">
                    <motion.h3 className="options cursor-pointer" variants={linkVariants} whileHover="hover">
                        Project
                    </motion.h3>
                </Link>
                <Link href="/contact">
                    <motion.h3 className="options cursor-pointer" variants={linkVariants} whileHover="hover">
                        Contact
                    </motion.h3>
                </Link>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
                className="md:hidden text-2xl text-[#10375C]"
                onClick={toggleMenu}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="absolute top-[70px] left-0 w-full bg-[#fff] flex flex-col items-center gap-5 py-5 shadow-md md:hidden z-50"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <Link href="/" onClick={toggleMenu}>
                            <motion.h3 className="options" variants={linkVariants} whileHover="hover">
                                Home
                            </motion.h3>
                        </Link>
                        <Link href="/about" onClick={toggleMenu}>
                            <motion.h3 className="options" variants={linkVariants} whileHover="hover">
                                About
                            </motion.h3>
                        </Link>
                        <Link href="/project" onClick={toggleMenu}>
                            <motion.h3 className="options" variants={linkVariants} whileHover="hover">
                                Project
                            </motion.h3>
                        </Link>
                        <Link href="/contact" onClick={toggleMenu}>
                            <motion.h3 className="options" variants={linkVariants} whileHover="hover">
                                Contact
                            </motion.h3>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}