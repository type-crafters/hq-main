"use client";

import { parseMarkdown } from "@/lib/renderer";
import { IBlogPost } from "@/lib/types";
import { toReadableDate } from "@/lib/utils";
import { JSX, useEffect, useState } from "react";

interface NavLink {
    id: string;
    text: string;
    href: string;
}

export default function BlogPost({ post }: BlogPostProps): JSX.Element {
    const [navlinks, setNavLinks] = useState<NavLink[]>([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        const navLinks = Array.from(document.getElementsByClassName("navigate-h-2")).map((element) => ({
            id: element.id,
            text: element.innerHTML,
            href: `#${element.id}`
        }));
        setNavLinks(navLinks);
    }, []);

    return (
        <div className="w-full flex">
            <aside className="flex-1 hidden md:flex flex-col gap-4 px-4 py-6 sticky top-12 bg-inherit h-full max-h-[80vh]">
                <nav className="flex flex-col gap-6 overflow-y-auto">
                    <h2 className="text-lg font-medium">In this article</h2>
                    <ul className="flex flex-col gap-2">
                        { navlinks.map((link) => (
                            <li key={link.id} className="text-sm text-neutral-400 px-2 border-l-2 border-transparent hover:border-blue-600 duration-150">
                                <a href={link.href}>{link.text}</a>
                            </li>
                        )) }
                    </ul>
                </nav>
                <hr className="mt-4 border-neutral-700"/>
            </aside>
            <main className="flex-3 xl:flex-4 2xl:flex-3 flex flex-col gap-4 my-6 px-4 w-full overflow-x-hidden break-words">
                <h1 className="text-4xl font-semibold">{post.title}</h1>
                <div className="w-full flex flex-col sm:flex-row items-start md:items-center text-neutral-400 gap-2 md:gap-0">
                    <span id="date" className="flex-1">{toReadableDate(post.creationDate)}</span>
                    <span id="author" className="flex-1">Author: {post.author}</span>
                </div>
                <section
                    id="contents"
                    className="flex flex-col gap-4 w-full"
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content || "") }}></section>
            </main>
            <section className="flex-1 w-full hidden 2xl:flex"></section>
        </div>
    );
}

interface BlogPostProps {
    post: IBlogPost
}