import { JSX } from "react";

export default function WebsiteHeader(): JSX.Element {
    return (
        <header className="bg-black border-b border-neutral-200 flex justify-between items-center px-12 py-3">
            <div className="flex items-center gap-12">
                <a href="/" className="flex items-center gap-4">
                    <i className="bi bi-tools flex-center text-2xl"></i>
                    <h1 className="text-2xl font-bold">TypeCrafters HQ</h1>
                </a>
                <nav id="header-links" className="flex items-center gap-4">
                    <a href="/home">Home</a>
                    <a href="/games">Games</a>
                    <a href="/blog">Blog</a>
                    <a href="/team">Our team</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
            <div className="flex items-center">
                <nav id="header-handles" className="flex items-center gap-8">
                    <a href="#">
                        <i className="bi bi-instagram text-xl flex-center"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-twitter-x text-xl flex-center"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-youtube text-xl flex-center"></i>
                    </a>
                </nav>
            </div>
        </header>
    );
}