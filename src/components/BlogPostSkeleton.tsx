import { JSX } from "react";

export default function BlogPostSkeleton(): JSX.Element {
    return (
        <div
            className="grid grid-cols-[1fr_3fr] xl:grid-cols-[1fr_3fr_1fr] gap-x-4"
        >
            <aside className="w-full bg-neutral-800"></aside>
            <main className="w-full flex flex-col justify-center gap-4 my-6">
                <h1 className="text-4xl font-semibold w-full bg-neutral-800 animate-pulse rounded">&nbsp;</h1>
                <div className="w-full flex items-center text-neutral-400">
                    <div id="date-container" className="flex-1">
                        <span id="date" className="block w-full max-w-32 rounded animate-pulse bg-neutral-800">&nbsp;</span>
                    </div>
                    <div id="author-container" className="flex-1">
                        <span id="author" className="block w-full max-w-64 rounded animate-pulse bg-neutral-800">&nbsp;</span>
                    </div>
                </div>
                <section
                    id="contents"
                    className="flex flex-col gap-4"
                >
                    <p className="w-full h-16 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-full h-36 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-full h-16 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-4/5 h-8 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-full h-24 rounded bg-neutral-800 animate-pulse"></p>
                    <p className="w-full h-16 rounded bg-neutral-800 animate-pulse"></p>

                </section>
            </main>
        </div>
    );
}