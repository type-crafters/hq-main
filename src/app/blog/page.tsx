import BlogPostItem from "@/components/BlogPostItem";
import BlogPostList from "@/components/BlogPostList";
import SearchArticles from "@/components/SearchArticles";
import siteConfig from "@/lib/site.config";
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
                    <BlogPostItem />
                    <BlogPostItem />
                    <BlogPostItem />
                    <BlogPostItem />
                </section>
                <h2 className="text-2xl font-semibold">Latest Posts</h2>
                <BlogPostList />
            </main>
        </>
    );
}