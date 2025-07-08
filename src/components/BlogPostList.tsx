"use client";

import { JSX, useEffect, useMemo, useState } from "react";
import BlogPostItem from "./BlogPostItem";
import siteConfig from "@/lib/site.config";
import { IBlogPost } from "@/lib/types";
import path from "path";
import BlogPostItemSkeleton from "./BlogPostItemSkeleton";

export default function BlogPostList(): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true);
    const [blogposts, setBlogPosts] = useState<IBlogPost[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const url = new URL(process.env.NEXT_PUBLIC_API_URL!);
                url.pathname = path.join(url.pathname, "blog", "posts");
                const response = await fetch(url, {
                    method: "GET"
                });

                if (response.ok) {
                    const data = await response.json();
                    setBlogPosts(data);
                }
            } finally {
                setLoading(false);
            }
        })();
    }, [])

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
                {loading ? (
                    <>
                        <BlogPostItemSkeleton horizontal />
                        <BlogPostItemSkeleton horizontal />
                        <BlogPostItemSkeleton horizontal />
                    </>
                ) : (
                    postpage.length > 0 ? (
                        <>
                            {postpage.map((post) => (
                                <BlogPostItem
                                    key={post.id}
                                    id={post.id}
                                    thumbnail={post.thumbnail}
                                    title={post.title}
                                    preview={post.preview}
                                    horizontal
                                />
                            ))}
                        </>
                    ) : (
                        <div>
                            <h2 className="text-xl font-medium">Looks like there are no blog posts yet...</h2>
                            <p className="text-neutral-400">New stories and updates will appear here once they're published.</p>
                        </div>
                    )
                )}
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