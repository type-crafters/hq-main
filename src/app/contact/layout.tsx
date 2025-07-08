import { Metadata } from "next";
import { JSX, ReactNode } from "react";

export const metadata: Metadata = {
    title: "Contact us | TypeCrafters HQ",
    description: "Get in touch with our team at TypeCrafters"
}

export default function ContactLayout({ children }: ContactLayoutProps): JSX.Element {
    return (
        <>
            {children}
        </>
    );
}

interface ContactLayoutProps {
    children: ReactNode;
}