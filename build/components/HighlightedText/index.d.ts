/// <reference types="react" />
export interface HighlightedTextProps {
    text: string;
    highlight: string;
    className?: string;
}
export declare const HighlightedText: ({ text, highlight, className }: HighlightedTextProps) => JSX.Element;
