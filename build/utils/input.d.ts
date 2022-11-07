/// <reference types="react" />
interface Params {
    event: React.KeyboardEvent<HTMLInputElement>;
    value: string;
    min?: number | string;
    isFloat?: boolean;
    precision?: number;
}
export declare function isForbiddenKey({ event, value, min, isFloat, precision }: Params): boolean;
export {};
