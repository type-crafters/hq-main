"use client";

import path from "path";
import { JSX, useEffect } from "react";

export default function VisitTracker(): JSX.Element {
    useEffect(() => {
        const url = new URL(process.env.NEXT_PUBLIC_API_URL!);
        url.pathname = path.join(url.pathname, "stats", "visits");
        (async () => {
            if (typeof window !== "undefined" && !sessionStorage.getItem("loggedVisit")) {
                sessionStorage.setItem("loggedVisit", "true");

                return await fetch(url, {
                    method: "POST"
                });
            }
        })();

    }, []);

    return (
        <></>
    );
}
