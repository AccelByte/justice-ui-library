export interface SelectOption<T = string> {
    label: string;
    value: T;
    tooltip?: string;
    isUnremovable?: boolean;
}
