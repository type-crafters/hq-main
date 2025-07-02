"use client";

import { JSX } from "react";

export default function SearchArticles(): JSX.Element {
    return (
        <div className="flex gap-2 items-center px-2 py-1 rounded border border-neutral-200 bg-neutral-800 ">
            <button className="px-1 cursor-pointer">
                <i className="bi bi-search"></i>
                </button>
            <input
                type="search"
                id="search-articles"
                name="search-articles"
                placeholder="Search articles"
                className="flex-1 placholder:text-neutral-500 focus:outline-none"
            />
            <button className="px-1 cursor-pointer">
                <i className="bi bi-x-lg"></i>
            </button>
        </div>
    );
}