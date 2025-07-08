import siteConfig from "@/lib/site.config";
import Link from "next/link";
import { JSX } from "react";

export default function WebsiteFooter(): JSX.Element {
    return (
        <footer className="mt-8 py-8 border-t border-neutral-200 flex flex-col items-center gap-6">
            <div className="flex w-full justify-center items-center">
                <nav id="footer-links">
                    <ul className="flex flex-col sm:flex-row items-center gap-4">
                        <li className="py-1 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                            <Link href="/games">Games</Link>
                        </li>
                        <li className="py-1 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className="py-1 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                            <Link href="/blog">Shop</Link>
                        </li>
                        <li className="py-1 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                            <Link href="/team">Our Team</Link>
                        </li>
                        <li className="py-1 border-b-2 border-transparent hover:border-neutral-200 duration-200">
                            <Link href="/contact">Contact us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex w-full justify-center items-center py-1">
                <nav id="footer-handles" className="flex items-center gap-8">
                    <a href={siteConfig.links.instagram} target="_blank">
                        <i className="bi bi-instagram text-xl flex-center"></i>
                    </a>
                    <a href={siteConfig.links.twitter} target="_blank">
                        <i className="bi bi-twitter-x text-xl flex-center"></i>
                    </a>
                    <a href={siteConfig.links.youtube} target="_blank">
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