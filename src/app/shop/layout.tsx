import { Metadata } from "next";
import { JSX, ReactNode } from "react";

export const metadata: Metadata = {
    title: "Shop | TypeCrafters HQ",
    description: "Browse through TypeCrafters merchandise."
}

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
