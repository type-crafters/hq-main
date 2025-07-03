"use client";

import { JSX, useMemo, useState } from "react";
import BlogPost from "./BlogPost";
import siteConfig from "@/lib/site.config";

export default function BlogPostList(): JSX.Element {
    const blogposts = [
        {
            id: "1",
            thumbnail: "/img/developers-working.png",
            title: "Article 1",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nam sed mollitia quos. Sapiente ad neque excepturi expedita quasi libero inventore maiores."
        },
        {
            id: "2",
            thumbnail: "/img/developers-working.png",
            title: "Article 2",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nam sed mollitia quos. Sapiente ad neque excepturi expedita quasi libero inventore maiores."
        },
        {
            id: "3",
            thumbnail: "/img/developers-working.png",
            title: "Article 3",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nam sed mollitia quos. Sapiente ad neque excepturi expedita quasi libero inventore maiores."
        },
        {
            id: "4",
            thumbnail: "/img/developers-working.png",
            title: "Article 4",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nam sed mollitia quos. Sapiente ad neque excepturi expedita quasi libero inventore maiores."
        },
        {
            id: "5",
            thumbnail: "/img/developers-working.png",
            title: "Article 5",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nam sed mollitia quos. Sapiente ad neque excepturi expedita quasi libero inventore maiores."
        },
        {
            id: "6",
            thumbnail: "/img/developers-working.png",
            title: "Article 6",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nam sed mollitia quos. Sapiente ad neque excepturi expedita quasi libero inventore maiores."
        },
        {
            id: "7",
            thumbnail: "/img/developers-working.png",
            title: "Article 7",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nam sed mollitia quos. Sapiente ad neque excepturi expedita quasi libero inventore maiores."
        }
    ];

    const [current, setCurrent] = useState(1);

    const range = (start: number, end: number): number[] => {
        if (end <= start) return [];
        return Array.from({ length: end - start }, (_, i) => start + i);
    };

    const pageCount = Math.ceil(blogposts.length / siteConfig.blog.paginationLimit) || 1;

    const postpage = useMemo(() => {
        const start = (current - 1) * siteConfig.blog.paginationLimit;
        return blogposts.slice(start, start + siteConfig.blog.paginationLimit);
    }, [blogposts, current]);



    return (
        <>
            <section id="article-grid" className="grid w-full gap-y-8 duration-300">
                {postpage.map((post) => (
                    <BlogPost key={post.id} id={post.id} thumbnail={post.thumbnail} title={post.title} content={post.content} horizontal />
                ))}
            </section>
            <section id="pagination-controls" className="w-full">
                <div className="flex w-full justify-center items-center gap-6">
                    <div className="flex items-center gap-1">
                        <button className="flex-center p-1 rounded-full aspect-square hover:bg-neutral-700 duration-200" onClick={() => setCurrent(1)}>
                            <i className="bi bi-skip-start flex-center"></i>
                        </button>
                        <button className="flex-center p-1 rounded-full aspect-square hover:bg-neutral-700 duration-200" onClick={() => setCurrent(Math.max(1, current - 1))}>
                            <i className="bi bi-caret-left flex-center"></i>
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        {range(1, pageCount + 1).map((i) => (
                            <button
                                key={i}
                                className={`p-1 rounded-full duration-200 ${current === i ? "bg-indigo-600" : "hover:bg-neutral-700"}`}
                                onClick={() => setCurrent(i)}
                            >
                                <span className="h-4 w-4 flex-center">{i}</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="flex-center p-1 rounded-full aspect-square hover:bg-neutral-700 duration-200" onClick={() => setCurrent(Math.min(current + 1, pageCount))}>
                            <i className="bi bi-caret-right flex-center"></i>
                        </button>
                        <button className="flex-center p-1 rounded-full aspect-square hover:bg-neutral-700 duration-200" onClick={() => setCurrent(pageCount)}>
                            <i className="bi bi-skip-end flex-center"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}