'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut", delay: 0.6 } },
    };

    return (
        <section className="relative w-full flex items-center justify-center text-center overflow-hidden">
            <video className="absolute w-full object-cover z-0 blur-sm" src="/media/films/test.mkv" autoPlay loop muted playsInline aria-label="Video de fondo mostrando producción multimedia">
            Tu navegador no soporta el tag de video.
            </video>
            <div className="relative text-[var(--foreground)] p-4 max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-[var(--accent)]"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible">
                        Transformamos Ideas en Experiencias Visuales Impactantes
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-[var(--foreground)]"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3, ...textVariants.visible.transition }}>
                        Desde comerciales cautivadores hasta videos corporativos de alta gama, somos tus socios en la producción multimedia.
                </motion.p>

                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileTap={{ scale: 0.96 }}>
                        <Link href="/servicios" className="bg-[var(--accent)] hover:bg-[var(--accenthover)] text-[var(--primary)] hover:text-[var(--primaryhover)] rounded-full font-bold py-3 px-8 text-lg transition duration-300 shadow-lg hover:shadow-xl font-sans">
                            Descubre Nuestros Servicios
                        </Link>
                </motion.div>
            </div>
        </section>
    )

}