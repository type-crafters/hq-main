"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function WebsiteHeader(): JSX.Element {
    const [displayNavbar, setDisplayNavbar] = useState<boolean>(false);

    return (
        <header className="flex items-center px-4 lg:px-8 gap-12 py-1 border-b border-neutral-200">
            <Link href="/" id="page-title" className="px-1 flex items-center gap-4 font-semibold text-lg md:text-xl lg:text-2xl">
                <i className="bi bi-tools flex-center"></i>
                <h1>TypeCrafters</h1>
            </Link>
            <div className="flex-1 flex lg:hidden justify-end items-center">
                <button className="p-1" onClick={() => setDisplayNavbar(true)}>
                    <i className="bi bi-list text-xl flex-center"></i>
                </button>
            </div>
            <nav
                id="header-navbar"
                className={`
                    flex-1 p-4 lg:p-0 lg:px-1 min-w-50 flex fixed z-50 
                    bg-black top-0 right-0  lg:static gap-6 
                    lg:gap-0 flex-col lg:flex-row justify-start 
                    lg:justify-between items-center h-screen 
                    lg:h-auto border-l lg:border-l-0 transition-transform 
                    duration-200 ease-in-out lg:translate-x-0
                    ${displayNavbar ? "translate-x-0" : "translate-x-full"} 
                `}
            >
                <div className="flex lg:hidden w-full items-center justify-end">
                    <button className="p-1" onClick={() => setDisplayNavbar(false)}>
                        <i className="bi bi-x-lg text-xl flex-center"></i>
                    </button>
                </div>
                <ul id="header-links" className="flex flex-col lg:flex-row items-center gap-4">
                    <li className="py-2 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                        <Link href="/games">Games</Link>
                    </li>
                    <li className="py-2 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="py-2 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                        <Link href="/blog">Shop</Link>
                    </li>
                    <li className="py-2 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                        <Link href="/team">Our Team</Link>
                    </li>
                    <li className="py-2 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                        <Link href="/contact">Contact us</Link>
                    </li>
                </ul>
                <ul id="header-socials" className="flex flex-col lg:flex-row items-center gap-8">
                    <li>
                        <a href="#">
                            <i className="bi bi-instagram text-lg flex-center"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-twitter-x text-lg flex-center"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-youtube text-lg flex-center"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}