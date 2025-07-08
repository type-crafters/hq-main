"use client";

import { IBlogPost } from "@/lib/types";
import { useParams } from "next/navigation";
import path from "path";
import { useEffect, useState } from "react";
import BlogPostSkeleton from "@components/BlogPostSkeleton";
import BlogPost from "@/components/BlogPost";

export default function BlogPostPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [post, setPost] = useState<IBlogPost>({} as IBlogPost);

    useEffect(() => {
        if (!id) return;
        (async () => {
            const url = new URL(process.env.NEXT_PUBLIC_API_URL!);
            url.pathname = path.join(url.pathname, "blog", "posts", id.toString());

            const response = await fetch(url, {
                method: "GET"
            });

            if (response.ok) {
                const data = await response.json();
                setPost(data);
            }

            setLoading(false);
        })();
    }, [])

    return loading ? (
        <BlogPostSkeleton />
    ) : (
        Object.keys(post).length === 0 ? (
            "204 NO CONTENT"
        ) : (
            <BlogPost post={post} />
        )
    );
}