import { JSX, ReactNode } from "react";

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
