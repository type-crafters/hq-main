import { JSX, ReactNode } from "react";
import styles from "./shop.module.css";

export default function ShopLayout({ children }: ShopLayoutProps): JSX.Element {
    return (
        <>
            { children }
        </>
    );
}

interface ShopLayoutProps {
    children: ReactNode;
}
