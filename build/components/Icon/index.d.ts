import * as React from "react";
import "../../styles/icons/index.scss";
interface IconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    name: string;
    className?: string;
}
export declare const Icon: ({ name, className, ...props }: IconProps) => JSX.Element;
export {};
