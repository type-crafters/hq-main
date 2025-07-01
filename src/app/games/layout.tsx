import { Metadata } from "next";
import { JSX, ReactNode } from "react";

export const metadata: Metadata = {
    title: "Our games | TypeCrafters HQ",
    description: "Explore the list of titles we've published or are currently working on."
}

export default function GamesLayout({ children }: GamesLayoutProps): JSX.Element {
    return (
        <>
            {children}
        </>
    );
}

interface GamesLayoutProps {
    children: ReactNode;
}