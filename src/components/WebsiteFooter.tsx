import { JSX } from "react";

export default function WebsiteFooter(): JSX.Element {
    return (
        <footer className="py-8 border-t border-neutral-200 flex flex-col items-center gap-6">
            <div className="flex w-full justify-center items-center">
                <nav id="footer-links" className="flex flex-col sm:flex-row items-center gap-4">
                    <a href="/home">Home</a>
                    <a href="/games">Games</a>
                    <a href="/blog">Blog</a>
                    <a href="/team">Our team</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
            <div className="flex w-full justify-center items-center">
                <nav id="footer-handles" className="flex items-center gap-8">
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
            <div className="flex w-full justify-center items-center">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} TypeCrafters, LLC. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}