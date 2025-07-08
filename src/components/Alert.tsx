"use client";

import { JSX, useState } from "react";

export default function Alert({
    bg,
    message
}: AlertProps): JSX.Element {
    const [display, setDisplay] = useState<boolean>(true);
    return (
        <div className={`rounded w-full max-w-3xl absolute z-45 top-1 right-4 items-center text-white ${bg} ${display ? "flex" : "hidden"}`}>
            <p className="flex-1 overflow-auto">{ message }</p>
            <button className="p-1" onClick={() => setDisplay(false)}>
                <i className="bi bi-x-lg flex-center hover:scale-105"></i>
            </button>
        </div>
    );
}

interface AlertProps {
    bg: string;
    message: string;
}