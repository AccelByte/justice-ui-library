import * as React from "react";
import { Enum } from "../../types";
import "./PureSearchPanel.scss";
export declare const SearchIconPosition: Readonly<{
    LEFT: "LEFT";
    RIGHT: "RIGHT";
}>;
export interface PureSearchPanelProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type" | "placeholder" | "autoComplete" | "onKeyPress"> {
    onSearch?: () => void;
    fixedWidth?: boolean;
    searchIconPosition?: Enum<typeof SearchIconPosition>;
    isDisabled?: boolean;
}
export declare const PureSearchPanel: ({ onSearch, fixedWidth, searchIconPosition, isDisabled, ...props }: PureSearchPanelProps) => JSX.Element;
