/// <reference types="react" />
import { Enum } from "../../types";
import "./index.scss";
export declare const BADGE_TYPE: Readonly<{
    BASIC: "BASIC";
    LIGHT: "LIGHT";
    OUTLINE: "OUTLINE";
}>;
export declare const BADGE_APPEARANCE: Readonly<{
    INFO: "INFO";
    INACTIVE: "INACTIVE";
    WARNING: "WARNING";
    ERROR: "ERROR";
    SUCCESS: "SUCCESS";
    GENERAL: "GENERAL";
}>;
export interface BadgeProps {
    text: string;
    appearance?: Enum<typeof BADGE_APPEARANCE>;
    type?: Enum<typeof BADGE_TYPE>;
    className?: string;
}
export declare const Badge: ({ text, appearance, className: customClassName, type, }: BadgeProps) => JSX.Element;
