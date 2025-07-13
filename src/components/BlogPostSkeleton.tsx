import { JSX } from "react";

export default function BlogPostSkeleton(): JSX.Element {
    return (
        <div className="w-full flex">
            <aside className="flex-1 hidden md:flex flex-col gap-4 px-4 py-6 sticky top-12 bg-inherit h-full max-h-[80vh]">
                <h2 className="w-full bg-neutral-800 rounded animate-pulse">&nbsp;</h2>
                <nav className="w-full h-80 bg-neutral-800 rounded animate-pulse"></nav>
            </aside>
            <main className="flex-3 xl:flex-4 2xl:flex-3 flex flex-col gap-4 my-6 px-4 w-full overflow-x-hidden break-words">
                <h1 className="text-4xl font-semibold w-full bg-neutral-800 animate-pulse rounded">&nbsp;</h1>
                <div className="w-full flex items-center text-neutral-400">
                    <div id="date-container" className="flex-1">
                        <span id="date" className="block w-full max-w-32 rounded animate-pulse bg-neutral-800">&nbsp;</span>
                    </div>
                    <div id="author-container" className="flex-1">
                        <span id="author" className="block w-full max-w-64 rounded animate-pulse bg-neutral-800">&nbsp;</span>
                    </div>
                </div>
                <section id="contents" className="flex flex-col gap-4">
                    <p className="w-full h-16 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-full h-36 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-full h-16 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-4/5 h-8 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-full h-24 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-full h-16 rounded bg-neutral-800 animate-pulse"></p>
                </section>
            </main>
            <section className="flex-1 w-full hidden 2xl:flex"></section>
        </div>
    );
}