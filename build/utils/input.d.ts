interface Params {
    key: string;
    value: string;
    min?: number | string;
    isFloat?: boolean;
}
export declare function isForbiddenKey({ key, value, min, isFloat }: Params): boolean;
export {};
