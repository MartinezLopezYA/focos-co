/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useCallback, useEffect } from "react";
import MeetUs from "./sections/MeetUs";
import WorkWithUs from "./sections/WorkWithUs";
import { AnimatePresence, motion } from "framer-motion";
import Team from "./sections/Team";

export const sections = [
    { id: 'meet-us', component: <MeetUs/>},
    { id: 'team', component: <Team/> },
    { id: 'work-with-us', component: <WorkWithUs/> }
];

export default function AboutPage() {

    const variants = {
        enter: (direction: number) => ({
            y: direction > 0 ? 100 : -100,
            opacity: 0,
            position: 'absolute' as const,
        }),
        center: {
            y: 0,
            opacity: 1,
            position: 'relative' as const,
        },
        exit: (direction: number) => ({
            y: direction > 0 ? -100 : 100,
            opacity: 0,
            position: 'absolute' as const,
        }),
    };

    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(0);
    const [isScrolling, setIsScrolling] = React.useState(false);
    const [showButtons, setShowButtons] = React.useState(true);
    const [isMobile, setIsMobile] = React.useState(false);

    const next = useCallback(() => {
        if (index < sections.length - 1) {
            setDirection(1);
            setIndex((prev) => prev + 1);
        }
    }, [index]);

    const prev = useCallback(() => {
        if (index > 0) {
            setDirection(-1);
            setIndex((prev) => prev - 1);
        }
    }, [index]);

    const isScrollable = (element: HTMLElement | null) => {
        if (!element) return false
        return element.scrollHeight > element.clientHeight
    }

    const isScrollAtBottom = (element: HTMLElement | null) => {
        if (!element) return false
        return element.scrollTop + element.clientHeight >= element.scrollHeight - 10
    }

    const isScrollAtTop = (element: HTMLElement | null) => {
        if (!element) return false
        return element.scrollTop <= 10
    }

    const handleScroll = useCallback(
        (e: WheelEvent) => {
            if (isScrolling) return;

            const scrollableEl = document.querySelector('#scrollable') as HTMLElement | null;
            const fallbackEl = document.querySelector('#section-container') as HTMLElement | null;

            const currentSection = scrollableEl || fallbackEl;
            if (!currentSection) return;

            const goingDown = e.deltaY > 0;

            const allowNext = !isScrollable(currentSection) || isScrollAtBottom(currentSection);
            const allowPrev = !isScrollable(currentSection) || isScrollAtTop(currentSection);

            if (goingDown && allowNext) {
                setIsScrolling(true);
                next();
            } else if (!goingDown && allowPrev) {
                setIsScrolling(true);
                prev();
            }

            setTimeout(() => {
                setIsScrolling(false);
            }, 300);
        },
        [isScrolling, next, prev]
    );

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: true })
        return () => window.removeEventListener('wheel', handleScroll)
    }, [handleScroll]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        const hide = () => {
            setShowButtons(true);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearTimeout((window as any).__navTimeout);
            (window as any).__navTimeout = setTimeout(() => {
                setShowButtons(false);
            }, 3000);
        };

        window.addEventListener("scroll", hide);
        window.addEventListener("mousemove", hide);
        window.addEventListener("touchstart", hide);

        hide(); // iniciar el ciclo

        return () => {
            window.removeEventListener("scroll", hide);
            window.removeEventListener("mousemove", hide);
            window.removeEventListener("touchstart", hide);
        };
    }, [isMobile]);
    
    return (
        <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-[var(--background)]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={index}
                    id="section-container"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="relative w-full h-full flex items-center justify-center overflow-hidden"
                >
                    {sections[index]?.component}
                </motion.div>
            </AnimatePresence>
            <AnimatePresence>
                {showButtons && (
                    <motion.div
                        key="nav-buttons"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.3 }}
                        className={`z-50 fixed ${isMobile ? 'bottom-6 right-6 flex-col' : 'bottom-8 left-8 flex-row'} flex gap-3`}
                    >
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={prev}
                            disabled={index === 0}
                            className="p-3 bg-[var(--accent)] hover:bg-[var(--accenthover)] text-[var(--primary)] hover:text-[var(--primaryhover)] rounded-full shadow-lg disabled:opacity-50 disabled:bg-[var(--background)] disabled:cursor-default"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 0l3 3m-3-3l3-3" />
                            </svg>
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={next}
                            disabled={index === sections.length - 1}
                            className="p-3 bg-[var(--accent)] hover:bg-[var(--accenthover)] text-[var(--primary)] hover:text-[var(--primaryhover)] rounded-full shadow-lg disabled:opacity-50 disabled:bg-[var(--background)] disabled:cursor-default"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m6 0l-3-3m3 3l-3 3" />
                            </svg>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );

}