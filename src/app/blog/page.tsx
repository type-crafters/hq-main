import BlogPost from "@/components/BlogPost";
import SearchArticles from "@/components/SearchArticles";
import { JSX, useState } from "react";

export default function BlogView(): JSX.Element {

    return (
        <>
            <main className="contain flex flex-col justify-start gap-6 p-4">
                <h1 className="text-4xl font-semibold my-2">Blog</h1>
                <SearchArticles />
                <h2 className="text-2xl font-semibold">Featured Articles</h2>
                <section
                    id="featured-article-gallery"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 w-full"
                >
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </section>
                <h2 className="text-2xl font-semibold">Latest Posts</h2>
                <section id="article-grid" className="grid w-full gap-y-8">
                    <BlogPost horizontal/>
                    <BlogPost horizontal/>
                    <BlogPost horizontal/>
                    <BlogPost horizontal/>
                    <BlogPost horizontal/>
                    <BlogPost horizontal/> 
                </section>
            </main>
        </>
    );
}