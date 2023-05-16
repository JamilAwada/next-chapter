"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const shouldSetScrolled = scrollTop > 0;

            setIsScrolled(shouldSetScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`py-4 bg-transparent transition-all duration-300 sticky top-0 z-10 ${isScrolled ? 'glassy-nav' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center w-full justify-between">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <h1 className="font-semibold text-3xl">Todo</h1>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-10">
                                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium hover:-translate-y-1 transition duration-200">Home</a>
                                <a href="#" className="text-lg px-3 py-2 rounded-md font-medium hover:-translate-y-1 transition duration-200">About</a>
                                <Link href="/login" className="text-lg px-3 py-2 rounded-md font-medium hover:-translate-y-1 transition duration-200">Login</Link>
                                <Link href="/signup" className="bg-primarybtn text-white text-lg px-4 py-3 rounded-md font-medium hover:backdrop-filter: blur(4px) hover:-translate-y-1 transition duration-200">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleNav} type="button" className="inline-flex items-center justify-center p-2 rounded-md transition duration-200 hover:text-white hover:bg-primary focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 sm:px-3 flex flex-col items-center w-full space-y-3">
                        <a href="#" className="block text-lg px-3 py-2 rounded-md font-medium hover:-translate-y-1 transition duration-200 w-fit">Home</a>
                        <a href="#" className="block text-lg px-3 py-2 rounded-md font-medium hover:-translate-y-1 transition duration-200 w-fit">About</a>
                        <a href="#" className="block text-lg px-3 py-2 rounded-md font-medium hover:-translate-y-1 transition duration-200 w-fit">Login</a>
                        <a href="#" className="block bg-primarybtn text-white text-lg px-4 py-3 rounded-md font-medium hover:-translate-y-1 transition duration-200 w-fit">Sign Up</a>
                    </div>
                </div>
            )}
        </nav>
    );
};


export default Nav