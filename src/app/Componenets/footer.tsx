"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center h-[100px] bg-gradient-to-r from-[#10375C] to-[#1E4A77] text-white font-medium shadow-lg"
        >
            <motion.p 
                whileHover={{ scale: 1.1 }} 
                transition={{ type: "spring", stiffness: 300 }}
                className="text-xl text-center"
            >
                © 2024 Kinza Aftab. All rights reserved.
            </motion.p>
        </motion.footer>
    );
}
