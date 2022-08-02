export interface HighlightedTextProps {
    text: string;
    /** Will be rendered bold if `text` containts it */
    highlight: string;
    className?: string;
}
export declare const HighlightedText: ({ text, highlight, className }: HighlightedTextProps) => JSX.Element;
