'use client';

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const tabs = [
    { img: '/media/images/about/us.jpg', label: 'Nosotros', content: 'Somos una compañía audiovisual especializada en crear experiencias cinematográficas para potenciar el maketing digital. Con el objetivo de transformar historias en contenido de alto impacto que conecte con la audiencia.' },
    { img: '/media/images/about/us.jpg', label: 'Misión', content: 'En FOCOS CO, somos una compañía audiovisual especializada en crear experiencias cinematográficas para potenciar el marketing digital. Nuestro objetivo es transformar historias en contenido visual que conecte de manera profunda con la audiencia.' },
    { img: '/media/images/about/us.jpg', label: 'Visión', content: 'Creemos en el poder del Cine para inspirar, emocionar y generar impacto. Cada proyecto que realizamos es una oportunidad para contar una historia única, con calidad visual y narrativa que eleva el mensaje de nuestros clientes a un nuevo nivel.' }
]

export default function MeetUs() {

    const [selectedTab, setSelectedTab] = useState(tabs[0])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16 bg-background rounded-3xl md:shadow-md max-w-6xl mx-auto overflow-hidden">
            <div>
                <h2 className="text-3xl font-bold text-[var(--accent)] mb-6">Conoce más sobre nosotros</h2>
                <div className="flex gap-4 mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => setSelectedTab(tab)}
                            className={`text-foreground hover:text-[var(--accent)] border-b-2 transition duration-300 hover:cursor-pointer pt-2 pb-1 px-4 ${selectedTab.label === tab.label
                                    ? "border-b-[var(--accent)] text-[var(--accent)]"
                                    : "border-b-transparent hover:border-b-[var(--accenthover)]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-foreground text-base leading-relaxed"
                    >
                        <h3 className="text-lg font-semibold mb-2">{selectedTab.label}</h3>
                        <p>{selectedTab.content}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex justify-center items-center relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[var(--accenttransparent)] via-[var(--primarytransparent)] to-[var(--secondarytransparent)]">
                        <Image
                            src={selectedTab.img}
                            alt={`Imagen de ${selectedTab.label}`}
                            width={600}
                            height={400}
                            className="w-full h-full object-contain p-10"
                            priority />
                        {/* <button className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white bg-opacity-60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                        <path d="M6 4l10 6-10 6V4z" />
                                </svg>
                            </div>
                        </button> */}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );

}