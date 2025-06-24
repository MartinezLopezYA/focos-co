'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {

    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            setTheme(systemTheme);
            document.documentElement.classList.add(systemTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <header className="bg-[var(--background)] text-[var(--foreground)]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image width={900} height={1} className="h-16 w-auto" src="/media/images/Logo.png" alt="Focosco main logo" priority/>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-[var(--foreground)]" aria-expanded="false" onClick={() => setOpen(!open)}>
                            Product
                            <svg className="size-5 flex-none text-[var(--foreground)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {open && (
                            <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-[var(--background)] shadow-lg ring-1 text-[var(--foreground)]">
                                <div className="p-4">
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-amber-700">
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-[var(--background)] group-hover:bg-amber-700">
                                            <svg className="size-6 text-[var(--foreground)] group-hover:text-indigo-950" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-[var(--foreground)]">
                                                Analytics
                                                <span className="absolute inset-0"></span>
                                            </a>
                                        <p className="mt-1 text-[var(--foreground)]">Get a better understanding of your traffic</p>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-amber-700">
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-[var(--background)] group-hover:bg-amber-700">
                                            <svg className="size-6 text-[var(--foreground)] group-hover:text-indigo-950" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-[var(--foreground)]">
                                                Engagement
                                                <span className="absolute inset-0"></span>
                                            </a>
                                            <p className="mt-1 text-[var(--foreground)]">Speak directly to your customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <a href="#" className="text-sm/6 font-semibold color-white">Features</a>
                    <a href="#" className="text-sm/6 font-semibold color-white">Marketplace</a>
                    <a href="#" className="text-sm/6 font-semibold color-white">Company</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button onClick={() => toggleTheme()} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
                </div>

            </nav>
        </header>
    );
}

