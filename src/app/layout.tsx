import { JSX, ReactNode } from "react";
import { Metadata } from "next";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import WebsiteHeader from "@components/WebsiteHeader";
import WebsiteFooter from "@components/WebsiteFooter";
import VisitTracker from "@/components/VisitTracker";

export const metadata: Metadata = {
    title: "Home | TypeCrafters HQ",
    description: "Meet the team behind the magic."
}

export default function RootLayout({
    children
}: RootLayoutProps ): JSX.Element {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="/img/favicon.svg" type="image/svg+xml" />
            </head>
            <body>
                <WebsiteHeader />
                { children }
                <WebsiteFooter />
                <VisitTracker />
            </body>
        </html>
    );
}

interface RootLayoutProps {
    children: ReactNode;
}