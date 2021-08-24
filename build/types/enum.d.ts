export declare type UnionFromTuple<T> = T extends (infer U)[] ? U : never;
export declare const Enum: <T extends string[]>(...args: T) => Readonly<{ [P in UnionFromTuple<T>]: P; }>;
export declare type Enum<T extends object> = T[keyof T];
export declare const isKeyOfEnum: <T extends object>(key: unknown, enumType: T) => key is keyof T;
export declare type Weaken<T, K extends keyof T> = {
    [P in keyof T]: P extends K ? any : T[P];
};
