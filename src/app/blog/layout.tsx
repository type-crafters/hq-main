import { Metadata } from "next";
import { JSX, ReactNode } from "react";

export const metadata: Metadata = {
    title: "Blog | TypeCrafters HQ",
    description: "Read through our latest articles and progress reports."
}

export default function BlogLayout({ children }: BlogLayoutProps): JSX.Element {
    return (
        <>
            {children}
        </>
    );
}

interface BlogLayoutProps {
    children: ReactNode;
}