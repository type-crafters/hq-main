import { JSX, ReactNode } from "react";
import styles from "./contact.module.css";

export default function ContactLayout({ children }: ContactLayoutProps): JSX.Element {
    return (
        <>
            { children }
        </>
    );
}

interface ContactLayoutProps {
    children: ReactNode;
}