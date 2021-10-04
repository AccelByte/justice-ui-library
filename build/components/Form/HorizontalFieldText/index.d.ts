import React from "react";
import "./index.scss";
export interface HorizontalFieldTextProps {
    children?: React.ReactNode;
    label?: string;
    isLabelHidden?: boolean;
    isFlex?: boolean;
    className?: string;
    rightCellClassName?: string;
    isValueMultiLine?: boolean;
    tooltip?: string | null;
    dataQa?: string | null;
    labelAlignment?: "left" | "center" | "right";
    showTooltip?: boolean;
    isRequired?: boolean;
    optionalLabel?: string;
}
export declare class HorizontalFieldText extends React.Component<HorizontalFieldTextProps> {
    constructor(props: HorizontalFieldTextProps);
    tooltipRef: React.RefObject<HTMLInputElement>;
    showToolTips: () => void;
    hideToolTips: () => void;
    componentDidMount(): void;
    componentWillUpdate(nextProps: Readonly<HorizontalFieldTextProps>): void;
    render(): JSX.Element;
}
