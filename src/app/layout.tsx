import { JSX, ReactNode } from "react";
import "./index.module.css";

export default function RootLayout({
    children
}: RootLayoutProps ): JSX.Element {
    return (
        <html lang="en">
            <head>
                <title>Admin Panel | TypeCrafters HQ</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

interface RootLayoutProps {
    children: ReactNode;
}