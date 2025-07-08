import { JSX, ReactNode } from "react";

export default function HeroBanner({
    backgroundImage,
    children
}: HeroBannerProps): JSX.Element {
    return (
        <section
            className="w-full aspect-[3/4] sm:aspect-[9/5] lg:aspect-[12/5] h-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('" + backgroundImage + "')" }}
        >
            <div className="w-full h-full backdrop-blur-[1px] backdrop-brightness-[95%] bg-black/10">
                <div className="contain h-full py-12 flex items-end">
                    {children}
                </div>
            </div>
        </section>
    );
}

interface HeroBannerProps {
    backgroundImage: string;
    children?: ReactNode;
}