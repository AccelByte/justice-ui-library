/// <reference types="react" />
import { Enum } from "../../types";
export declare const EllipsisCropPosition: Readonly<{
    START: "START";
    MIDDLE: "MIDDLE";
    END: "END";
}>;
interface EllipsisConfig {
    cropAt: Enum<typeof EllipsisCropPosition>;
}
export declare function ellipsify(text: string, displayedLength?: number, config?: EllipsisConfig): string;
export declare const addLineBreaks: (text: string) => JSX.Element[];
export {};
