export declare const debounce: <F extends (...args: any) => any>(func: F, delay?: number) => (...args: Parameters<F>) => ReturnType<F>;
