import { JSX } from "react";

export default function HeroBanner({
    backgroundImage,
    text
}: HeroBannerProps): JSX.Element {
    return (
        <section
            className="w-full aspect-[12/5] h-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('" + backgroundImage + "')" }}
        >
            <div className="w-full h-full backdrop-blur-[1px] backdrop-brightness-[95%] bg-black/10">
                <div className="contain h-full py-12 flex items-end">
                    <h2 className="w-full text-6xl uppercase font-bold text-center lg:text-left">
                        { text }
                    </h2>
                </div>
            </div>
        </section>
    );
}

interface HeroBannerProps {
    backgroundImage: string;
    text: string;
}