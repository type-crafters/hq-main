import { JSX, ReactNode } from "react";
import styles from "./blog.module.css";

export default function BlogLayout({ children }: BlogLayoutProps): JSX.Element {
    return (
        <>
            { children }
        </>
    );
}

interface BlogLayoutProps {
    children: ReactNode;
}
