import { ReactElement } from "react";

type HeadingProps = { title: string };

const Heading = ({ title }: HeadingProps): ReactElement => {
    return <h1 className="text-3xl font-bold mb-2">{title}</h1>;
};

export default Heading;
