export interface LineBreakToListProps {
    /** This component is only useful when `text` contains `\n` */
    text: string;
    className?: string;
}
export declare const LineBreakToList: ({ text, className }: LineBreakToListProps) => JSX.Element;
