"use client";

import { JSX } from "react";

export default function ContactUsForm(): JSX.Element {
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (
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
                <input type="submit" value="Send message" className="flex-center text-white bg-indigo-600 p-2 rounded hover:bg-indigo-500 active:bg-indigo-700 duration-150" />
            </div>
        </form>
    );
}