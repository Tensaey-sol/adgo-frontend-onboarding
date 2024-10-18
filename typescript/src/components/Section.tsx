import { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode
};

export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
    return (
        <section className="my-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-lg">{children}</p>
        </section>
    );
};
