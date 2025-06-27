import { JSX, ReactNode } from "react";
import styles from "./team.module.css";

export default function TeamLayout({ children }: TeamLayoutProps): JSX.Element {
    return (
        <>
            { children }
        </>
    );
}

interface TeamLayoutProps {
    children: ReactNode;
}
