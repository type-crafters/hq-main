import { JSX } from "react";

export default function BlogPostItemSkeleton({
    horizontal = false
}: BlogPostItemSkeletonProps): JSX.Element {

    return (
        <div className={`w-full flex flex-col overflow-hidden justify-between px-1 py-2 scale-100 hover:scale-102 duration-200 rounded ${horizontal ? "md:flex-row-reverse gap-4" : "gap-2"}`}>
            <div className="min-h-40 aspect-video w-auto rounded bg-neutral-800 bg-cover bg-center bg-no-repeat animate-pulse"></div>
            <div className="flex flex-col gap-2 flex-1">
                <h3 className={`w-full max-w-80 text-xl bg-neutral-800 rounded animate-pulse`}>&nbsp;</h3>
                <p className="text-neutral-400 line-clamp-3 max-w-2xl bg-neutral-800 rounded animate-pulse">
                    &nbsp;<br />&nbsp;
                </p>
            </div>
        </div>
    );
}

interface BlogPostItemSkeletonProps {
    horizontal?: boolean;
}