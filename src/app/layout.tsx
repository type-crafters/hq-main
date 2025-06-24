import { JSX, ReactNode } from "react";
import "./index.css";
import WebsiteHeader from "@/components/WebsiteHeader";

export default function RootLayout({
    children
}: RootLayoutProps ): JSX.Element {
    return (
        <html lang="en">
            <body>
                <WebsiteHeader />
                {children}
            </body>
        </html>
    );
}

interface RootLayoutProps {
    children: ReactNode;
}