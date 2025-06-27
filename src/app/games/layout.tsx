import { JSX, ReactNode } from "react";
import styles from "./games.module.css";

export default function GamesLayout({ children }: GamesLayoutProps): JSX.Element {
    return (
        <>
            { children }
        </>
    );
}

interface GamesLayoutProps {
    children: ReactNode;
}
