"use client";

import { JSX, useState } from "react";

export default function ContactUsInfo({
    bi,
    name,
    value,
    content
}: ContactInfoProps): JSX.Element {
    const [copied, setCopied] = useState<boolean>(false);
    const copyValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(event.currentTarget.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
    }
    return (

        <button type="button" onClick={copyValue} value={value} className="py-4 relative flex gap-6 items-center w-full cursor-pointer">
            {copied &&
                <div className={`px-2 text-base bg-emerald-600 rounded absolute top-0 right-0 ${copied ? "fade-out" : ""}`}>&#10004; Copied!</div>
            }
            <div className="rounded-full bg-neutral-800 flex-center p-3 w-fit aspect-square h-auto">
                <i className={`bi ${bi} text-3xl flex-center`}></i>
            </div>
            <div className="flex flex-col justify-start text-left overflow-hidden">
                <span className="text-xl font-medium break-words">{name}</span>
                <span className="break-words">{content}</span>
            </div>
        </button>
    );
}

interface ContactInfoProps {
    bi: string;
    name: string;
    value: string;
    content: string;
}