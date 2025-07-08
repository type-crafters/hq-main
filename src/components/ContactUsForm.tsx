"use client";

import path from "path";
import { JSX, useEffect, useState } from "react";
import Alert from "./Alert";

interface IAlert {
    bg: string;
    message: string;
}

export default function ContactUsForm(): JSX.Element {
    const [sending, setSending] = useState<boolean>(false);
    const [alert, setAlert] = useState<IAlert | undefined>(undefined);

    useEffect(() => setAlert(undefined), []);

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSending(true);

        const url = new URL(process.env.NEXT_PUBLIC_API_URL!);

        url.pathname = path.join(url.pathname, "contact", "messages");

        const form = event.currentTarget;
        const formdata = new FormData(form);

        const data = {
            name: formdata.get("name"),
            email: formdata.get("email"),
            subject: formdata.get("subject"),
            message: formdata.get("message")
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setAlert({
                bg: "bg-emerald-500",
                message: "Your message was sent successfully!"
            });

            form.reset();
        } else {
            setAlert({
                bg: "bg-red-500",
                message: "There was an error sending your message."
            })
        }

        setSending(false);
    }
    return (
        <>
        { alert && 
            <Alert bg={alert.bg} message={alert.message}/>
        }
            <form className="flex flex-col gap-6" onSubmit={submitForm}>
                <div className="flex flex-col gap-4 max-w-md">
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="E.g. John Doe"
                        className="px-2 py-1 rounded border border-neutral-200 bg-neutral-800 placeholder:text-neutral-500" />
                </div>
                <div className="flex flex-col gap-4 max-w-md">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        className="px-2 py-1 rounded border border-neutral-200 bg-neutral-800 placeholder:text-neutral-500" />
                </div>
                <div className="flex flex-col gap-4 max-w-md">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        list="subjects"
                        placeholder="Choose a subject"
                        className="px-2 py-1 rounded border border-neutral-200 bg-neutral-800 placeholder:text-neutral-500"
                    />
                    <datalist id="subjects">
                        <option value="General inquiry" />
                        <option value="Game feedback" />
                        <option value="Bug report" />
                        <option value="Technical support" />
                        <option value="Business Proposal" />
                        <option value="Partnership Opportunity" />
                        <option value="Media & Press Inquiry" />
                        <option value="Job Application" />
                        <option value="Internship Opportunities" />
                        <option value="Content Creator Collaboration" />
                        <option value="Licensing Request" />
                        <option value="Fan Art Submission" />
                        <option value="Event or Convention Invitation" />
                        <option value="Legal or Copyright Issue" />
                        <option value="Accessibility Feedback" />
                    </datalist>
                </div>
                <div className="flex flex-col gap-4 max-w-md">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write a message..."
                        rows={5}
                        className="px-2 py-1 rounded border border-neutral-200 bg-neutral-800 placeholder:text-neutral-500 resize-y" />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Send message"
                        disabled={sending}
                        className="flex-center text-white bg-indigo-600 p-2 rounded hover:bg-indigo-500 active:bg-indigo-700 duration-150"
                    />
                </div>
            </form>
        </>
    );
}