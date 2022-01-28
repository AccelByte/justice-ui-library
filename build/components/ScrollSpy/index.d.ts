import * as React from "react";
import "./index.scss";
export interface SpyItem {
    elementId: string;
    text: string;
    dataQa?: string | null;
}
export interface ScrollSpyProps {
    items: SpyItem[];
    className: string;
    offset?: number;
}
interface State {
    activeSessionId: string | null;
}
export declare class ScrollSpy extends React.Component<ScrollSpyProps, State> {
    constructor(props: ScrollSpyProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getElements: () => (HTMLElement | null)[];
    setActiveSection: () => void;
    debounceSetActiveSession: () => void;
    scrollTo: (elementId: string) => void;
    render(): JSX.Element;
}
export {};
