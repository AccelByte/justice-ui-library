import * as React from "react";
interface IconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    name: string;
    className?: string;
}
export declare const Icon: ({ name, className, ...props }: IconProps) => JSX.Element;
export {};
