import HeroBanner from "@/components/HeroBanner";
import { JSX } from "react";

export default function IndexView(): JSX.Element {
    return (
        <HeroBanner backgroundImage={"/img/gamers-lounging.png"}>
            <div className="w-full max-w-2xl flex flex-col gap-8 text-center md:text-left">
                <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold flex flex-col gap-1">
                    <span>Let's make</span>
                    <span>fun games</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl">
                    We stay true to what matters most—fun. 
                    Our mission is simple: create games that 
                    are a joy to play, with heart, creativity, 
                    and unforgettable moments.
                </p>
            </div>
        </HeroBanner>
    );
}