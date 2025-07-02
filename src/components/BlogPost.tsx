import Link from "next/link";
import { JSX } from "react";

export default function BlogPost({
    id="#",
    thumbnail="/img/developers-working.png",
    title = "Featured article",
    content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nam sed mollitia quos. Sapiente ad neque excepturi expedita quasi libero inventore maiores.",
    horizontal = false
}: BlogPostProps): JSX.Element {

    return (
        <Link
            href={`/blog/${id}`}
            className={`w-full flex flex-col  justify-between px-1 py-2 outline outline-transparent hover:outline-neutral-600 duration-200 rounded ${horizontal ? "md:flex-row-reverse gap-4" : "gap-2"}`}
        >
            <div
                className="min-h-40 aspect-video w-auto rounded bg-neutral-800 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${thumbnail}')` }}
            ></div>
            <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl">{ title }</h3>
                <p className="text-neutral-400 line-clamp-3 max-w-2xl">{ content }</p>
            </div>
        </Link>
    );
}

interface BlogPostProps {
    id?: string;
    thumbnail?: string;
    title?: string;
    content?: string;
    horizontal?: boolean;
}