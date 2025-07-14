"use client";

import { IBlogPost } from "@/lib/types";
import path from "path";
import { JSX, useEffect, useState } from "react";
import BlogPostItemSkeleton from "./BlogPostItemSkeleton";
import BlogPostItem from "./BlogPostItem";

export default function FeaturedBlogPostList(): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true);
    const [featuredBlogPosts, setFeaturedBlogPosts] = useState<IBlogPost[]>([])
    useEffect(() => {
        (async () => {
            try {
                const url = new URL(process.env.NEXT_PUBLIC_API_URL!);
                url.pathname = path.join(url.pathname, "blog", "posts");
                url.searchParams.set("show", "featured");
                const response = await fetch(url, {
                    method: "GET"
                });

                if (response.ok) {
                    const data = await response.json();
                    setFeaturedBlogPosts(data);
                }
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    
    return (
        <>
            {loading ? (
                <>
                    <BlogPostItemSkeleton />
                    <BlogPostItemSkeleton />
                    <BlogPostItemSkeleton />
                    <BlogPostItemSkeleton />
                </>
            ) : (
                featuredBlogPosts.length > 0 ? (
                    <>
                        {featuredBlogPosts.map((post) => (
                            <BlogPostItem
                                key={post.id}
                                id={post.id}
                                thumbnail={post.thumbnail}
                                title={post.title}
                                preview={post.preview}
                            />
                        ))}
                    </>
                ) : (
                    <div>
                        <h2 className="text-xl font-medium">Looks like there are no featured blog posts yet...</h2>
                        <p className="text-neutral-400">New stories and updates will appear here once they're published.</p>
                    </div>
                )
            )}
        </>
    );
}