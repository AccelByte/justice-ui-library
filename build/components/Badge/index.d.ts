/// <reference types="react" />
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
export declare const BADGE_SIZE: Readonly<{
    SMALL: "SMALL";
    LARGE: "LARGE";
    MEDIUM: "MEDIUM";
}>;
export interface BadgeProps {
    text: React.ReactNode;
    appearance?: keyof typeof BADGE_APPEARANCE;
    type?: keyof typeof BADGE_TYPE;
    size?: keyof typeof BADGE_SIZE;
    className?: string;
    isSemibold?: boolean;
}
export declare const Badge: ({ text, appearance, className: customClassName, type, size, isSemibold, }: BadgeProps) => JSX.Element;
