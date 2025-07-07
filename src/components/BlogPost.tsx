"use client";

import { parseMarkdown } from "@/lib/renderer";
import { IBlogPost } from "@/lib/types";
import { toReadableDate } from "@/lib/utils";
import { JSX, useEffect, useState } from "react";

interface NavLink {
    title: string;
    href: string;
}

export default function BlogPost({ post }: BlogPostProps): JSX.Element {
    const [navlinks, setNavLinks] = useState<NavLink[]>([]);

    useEffect(() => {
        const navLinks = Array.from(document.getElementsByClassName("navigate-h-2")).map((element) => ({
            title: element.innerHTML,
            href: `#${element.id}`
        }));
        setNavLinks(navLinks);
    }, []);

    useEffect(() => console.log(navlinks), [navlinks]);

    return (
        <div
            className="grid grid-cols-[1fr_3fr] xl:grid-cols-[1fr_3fr_1fr] gap-x-4"
        >
            <aside className="w-full bg-neutral-800">
                <nav className="flex gap-6">
                </nav>
            </aside>
            <main className="w-full flex flex-col justify-center gap-4 my-6">
                <h1 className="text-4xl font-semibold">{post.title}</h1>
                <div className="w-full flex items-center text-neutral-400">
                    <span id="date" className="flex-1">{toReadableDate(post.creationDate)}</span>
                    <span id="author" className="flex-1">Author: {post.author}</span>
                </div>
                <section
                    id="contents"
                    className="flex flex-col gap-4"
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content || "") }}></section>
            </main>
        </div>

    );
}

interface BlogPostProps {
    post: IBlogPost
}