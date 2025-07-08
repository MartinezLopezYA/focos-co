'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { duration: 0.6, ease: easeInOut }
        },
    }

    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isShowed, setIsShowed] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleExpand = () => {
        inputRef.current?.focus();
        setIsShowed((prev) => !prev);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [isOpen]);

    const pathname = usePathname();

    return (
        <motion.nav 
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="h-72px w-full flex justify-center fixed top-2 z-50 bg-background shadow-md rounded-full">
            <div className="container mx-auto flex justify-between gap-2 items-center">
                {isShowed && (
                    <Link href="/" className="rounded-full h-12 flex items-center">
                        <span className="sr-only">Your Company</span>
                        <Image width={800} height={1} className="rounded-full h-10 md:h-12 w-fit" src="/media/images/Logofocos.svg" alt="Focosco main logo" priority/>
                    </Link>
                )}
                <div className="hidden md:flex space-x-2">
                    <Link href="/" className={`text-[var(--foreground)] hover:text-[var(--primaryhover)] border-b-2 transition duration-300 pt-2 pb-1 px-4 ${pathname === "/" ? "border-b-[var(--accent)] text-[var(--accent)]"
                        : "border-b-transparent hover:border-b-[var(--accenthover)]"
                        }`}>Inicio</Link>
                    <Link href="/about" className={`text-[var(--foreground)] hover:text-[var(--primaryhover)] border-b-2 transition duration-300 pt-2 pb-1 px-4 ${pathname === "/about" ? "border-b-[var(--accent)] text-[var(--accent)]"
                        : "border-b-transparent hover:border-b-[var(--accenthover)]"
                        }`}> Nosotros</Link>
                    <Link href="/services" className={`text-[var(--foreground)] hover:text-[var(--primaryhover)] border-b-2 transition duration-300 pt-2 pb-1 px-4 ${pathname === "/services" ? "border-b-[var(--accent)] text-[var(--accent)]"
                        : "border-b-transparent hover:border-b-[var(--accenthover)]"
                        }`}>Servicios</Link>
                    <Link href="/contact" className={`text-[var(--foreground)] hover:text-[var(--primaryhover)] border-b-2 transition duration-300 pt-2 pb-1 px-4 ${pathname === "/contact" ? "border-b-[var(--accent)] text-[var(--accent)]"
                        : "border-b-transparent hover:border-b-[var(--accenthover)]"
                    }`}>Contacto</Link>
                </div>
                <div className="space-x-1 flex items-center">
                    <div className="relative flex items-center group">
                        <button type="button" aria-label="Buscar" onClick={handleExpand} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background text-foreground transition-colors group-focus-within:text-[var(--accent)] focus:outline-none" tabIndex={-1}>
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="7" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                        <input ref={inputRef} type="text" placeholder="Buscar en la página..." className="pl-12 py-2 bg-background transition-all duration-800 w-10 hover:border border-[var(--accent)] focus:w-59 md:focus:w-72 group-hover:w-72 focus:outline-none focus:ring-1 focus:ring-[var(--accent)] focus:shadow-lg text-foreground cursor-pointer focus:cursor-text focus:pr-2 rounded-full" onFocus={e => e.currentTarget.select()} onBlur={() => setIsShowed(true)}/>
                    </div>
                    <div className="space-x-4 flex items-center">
                        <div className="md:hidden">
                            <button aria-label="Abrir menú" className="p-2 rounded-full hover:bg-gray-100 transition" onClick={toggleMenu}>
                                <svg className="w-6 h-6 text-[var(--foreground)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <line x1="4" y1="6" x2="20" y2="6" />
                                    <line x1="4" y1="12" x2="20" y2="12" />
                                    <line x1="4" y1="18" x2="20" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 md:hidden"
                        onClick={toggleMenu}
                      >
                        <motion.div
                            variants={
                                {
                                    hidden: { x: '100%' },
                                    visible: { x: 0, transition: { type: 'tween', duration: 0.3 } },
                                    exit: { x: '100%', transition: { type: 'tween', duration: 0.3 } },
                                }
                            }
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg py-4 z-20 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-end px-4 mb-4">
                                <button aria-label="Cerrar menú" className="p-2 rounded-full hover:bg-gray-100 transition" onClick={toggleMenu}>
                                    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                            <Link href="/" className="block px-4 py-3 text-gray-700 hover:bg-[var(--primary)] hover:text-[var(--accent)] focus:text-[var(--accent)] font-sans text-lg border-b border-gray-100" onClick={toggleMenu}>Inicio</Link>
                            <Link href="/about" className="block px-4 py-3 text-gray-700 hover:bg-[var(--primary)] hover:text-[var(--accent)] focus:text-[var(--accent)] font-sans text-lg border-b border-gray-100" onClick={toggleMenu}>Acerca de</Link>
                            <Link href="/services" className="block px-4 py-3 text-gray-700 hover:bg-[var(--primary)] hover:text-[var(--accent)] focus:text-[var(--accent)] font-sans text-lg border-b border-gray-100" onClick={toggleMenu}>Servicios</Link>
                            <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:bg-[var(--primary)] hover:text-[var(--accent)] focus:text-[var(--accent)] font-sans text-lg" onClick={toggleMenu}>Contacto</Link>
                        </motion.div>
                      </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}