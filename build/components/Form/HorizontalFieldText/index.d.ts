import * as React from "react";
import "./index.scss";
interface HorizontalFieldTextProps {
    children?: React.ReactNode;
    label?: string;
    isLabelHidden?: boolean;
    className?: string;
    rightCellClassName?: string;
    dataQa?: string | null;
    labelAlignment?: "left" | "center" | "right";
}
export declare class HorizontalFieldText extends React.Component<HorizontalFieldTextProps> {
    render(): JSX.Element;
}
export {};
