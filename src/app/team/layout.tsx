import { Metadata } from "next";
import { JSX, ReactNode } from "react";

export const metadata: Metadata = {
    title: "Meet our team | TypeCrafters HQ",
    description: "Learn about the masterminds behind our projects"
}

export default function TeamLayout({ children }: TeamLayoutProps): JSX.Element {
    return (
        <>
            {children}
        </>
    );
}

interface TeamLayoutProps {
    children: ReactNode;
}