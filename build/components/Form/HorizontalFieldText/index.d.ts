import * as React from "react";
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
    showTooltipOnFocus?: boolean;
}
export declare const HorizontalFieldText: ({ children, className, tooltip, showTooltip, showTooltipOnFocus, label, isLabelHidden, isFlex, rightCellClassName, isValueMultiLine, dataQa, labelAlignment, isRequired, optionalLabel, }: HorizontalFieldTextProps) => JSX.Element;
