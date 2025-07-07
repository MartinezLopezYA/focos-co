'use client';

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function MeetUs() {

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeInOut, delay: 0.6 } },
    };

    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 }
        }
    }

    const textFadeIn = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 20, transition: { duration: 0.8, ease: easeInOut, delay: 0.2 } },
    };

    const imageSlideIn = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: -20, transition: { duration: 0.8, ease: easeInOut, delay: 0.4 } },
    };
    
    const [activeTab, setActiveTab] = React.useState<'us' | 'mission' | 'vision'>('us');

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-[var(--background)]">
            <div className="flex justify-between items-center w-full p-2 md:p-6 h-11">
                <div className="p-4 w-full shadow-lg">
                    <h1 className="text-3xl font-bold mb-2 text-[var(--accent)]">¿Quienes Somos?</h1>
                    <motion.div
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex space-x-2 mb-2">
                            <button onClick={() => setActiveTab('us')} className={`text-[var(--primary)] hover:text-[var(--primaryhover)] hover:bg-[var(--accenthover)] hover:cursor-pointer rounded-full transition py-1 px-4 ${activeTab === 'us' ? "bg-[var(--accenttransparent)] text-[var(--accent)]" : ""}`}>Nosotros</button>
                            <button onClick={() => setActiveTab('mission')} className={`text-[var(--primary)] hover:text-[var(--primaryhover)] hover:bg-[var(--accenthover)] hover:cursor-pointer rounded-full transition py-1 px-4 ${activeTab === 'mission' ? "bg-[var(--accenttransparent)] text-[var(--accent)]" : "" }`}>Misión</button>
                            <button onClick={() => setActiveTab('vision')} className={`text-[var(--primary)] hover:text-[var(--primaryhover)] hover:bg-[var(--accenthover)] hover:cursor-pointer rounded-full transition py-1 px-4 ${activeTab === 'vision' ? "bg-[var(--accenttransparent)] text-[var(--accent)]" : "" }`}>Visión</button>
                    </motion.div>
                    <div className="mt-4 min-h-[100px] max-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'us' && (
                                <motion.div
                                    key="us"
                                    variants={sectionVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="p-6 md:p-10 rounded-xl"
                                    >   
                                    <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
                                        <motion.div
                                            className="md:w-1/2 text-left"
                                            variants={textFadeIn}
                                            initial="initial"
                                            animate="animate"
                                            >
                                            <p className="text-[var(--primary)] text-lg md:text-xl">
                                                Somos una compañía audiovisual especializada en crear experiencias cinematográficas para potenciar el maketing digital. Con el objetivo de transformar historias en contenido de alto impacto que conecte con la audiencia.
                                            </p>
                                        </motion.div                          >
                                        <motion.div
                                            className="md:w-1/2 flex justify-center items-center relative"
                                            variants={imageSlideIn}
                                            initial="initial"
                                            animate="animate"
                                            >
                                            <Image
                                                src={"/media/images/about/us.jpg"}
                                                alt={"Imagen del equipo de FOCOS CO"}
                                                width={300}
                                                height={200}
                                                className="rounded-lg shadow-2xl border-4 border-accent dark:border-accent-dark object-cover w-full h-auto max-h-[400px]"
                                                priority
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                            {activeTab === 'mission' && (
                                <motion.div
                                    key="mission"
                                    variants={sectionVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="p-6 md:p-10 rounded-xl"
                                    >   
                                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                                        <motion.div
                                            className="md:w-1/2 text-left"
                                            variants={textFadeIn}
                                            initial="initial"
                                            animate="animate"
                                            >
                                            <p className="text-lg md:text-xl font-sans text-foreground leading-relaxed mb-4">
                                                En FOCOS CO, somos una compañía audiovisual especializada en crear experiencias cinematográficas para potenciar el marketing digital. Nuestro objetivo es transformar historias en contenido visual que conecte de manera profunda con la audiencia.
                                            </p>
                                        </motion.div                          >
                                        <motion.div
                                            className="md:w-1/2 flex justify-center items-center relative"
                                            variants={imageSlideIn}
                                            initial="initial"
                                            animate="animate"
                                            >
                                            <Image
                                                src={"/media/images/about/us.jpg"}
                                                alt={"Imagen del equipo de FOCOS CO"}
                                                width={600}
                                                height={400}
                                                className="rounded-lg shadow-2xl border-4 border-accent dark:border-accent-dark object-cover w-full h-auto max-h-[400px]"
                                                priority
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                            {activeTab === 'vision' && (
                                <motion.div
                                    key="vision"
                                    variants={sectionVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="p-6 md:p-10 rounded-xl"
                                    >   
                                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                                        <motion.div
                                            className="md:w-1/2 text-left"
                                            variants={textFadeIn}
                                            initial="initial"
                                            animate="animate"
                                            >
                                            <p className="text-lg md:text-xl font-sans text-foreground leading-relaxed mb-4">
                                                Creemos en el poder del Cine para inspirar, emocionar y generar impacto. Cada proyecto que realizamos es una oportunidad para contar una historia única, con calidad visual y narrativa que eleva el mensaje de nuestros clientes a un nuevo nivel.
                                            </p>
                                        </motion.div                          >
                                        <motion.div
                                            className="md:w-1/2 flex justify-center items-center relative"
                                            variants={imageSlideIn}
                                            initial="initial"
                                            animate="animate"
                                            >
                                            <Image
                                                src={"/media/images/about/us.jpg"}
                                                alt={"Imagen del equipo de FOCOS CO"}
                                                width={600}
                                                height={400}
                                                className="rounded-lg shadow-2xl border-4 border-accent dark:border-accent-dark object-cover w-full h-auto max-h-[400px]"
                                                priority
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );

}