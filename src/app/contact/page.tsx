import ContactUsForm from "@/components/ContactUsForm";
import ContactUsInfo from "@/components/ContactUsInfo";
import HeroBanner from "@components/HeroBanner";
import { JSX } from "react";

export default function ContactView(): JSX.Element {
    return (
        <>
            <HeroBanner backgroundImage="/img/gamers-engaging.png">
                <h1 className="w-full text-6xl uppercase font-bold text-center lg:text-left">Get in touch</h1>
            </HeroBanner>
            <main className="contain flex flex-col justify-start gap-6 p-4">
                <p>
                    We'd love to hear from you. Whether you have a question, feedback,
                    a business inquiry, or just want to say hello, feel free to reach
                    out using the form below. Our team is always open to new ideas,
                    collaborations, and conversations—so don't hesitate to get in touch.
                </p>
                <ContactUsForm />
                <h3 className="text-4xl font-semibold">Other ways to connect</h3>
                <p>
                    You can also reach us directly via phone or email, or through social media
                </p>
                <section className="w-full max-w-xl flex flex-col gap-2">
                    <ContactUsInfo
                        bi="bi-envelope-fill"
                        name="Email"
                        value="typecrafters0@gmail.com"
                        content="typecrafters0@gmail.com"
                    />
                    <ContactUsInfo
                        bi="bi-telephone-fill"
                        name="Phone"
                        value="+507 213 4567"
                        content="+507 213 4567"
                    />
                    <ContactUsInfo
                        bi="bi-geo-alt-fill"
                        name="Offices"
                        value="https://maps.app.goo.gl/ApRwGJnRiVcHGtiA8"
                        content="1054 Circunvalación St. Ciudad de Panamá, Panamá"
                    />
                </section>
            </main>
        </>
    );
}