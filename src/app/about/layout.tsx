import { JSX, ReactNode } from "react";
import styles from "./about.module.css";

export default function AboutLayout({ children }: AboutLayoutProps): JSX.Element {
    return (
        <>
            { children }
        </>
    );
}

interface AboutLayoutProps {
    children: ReactNode;
}
