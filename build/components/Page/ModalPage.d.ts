import * as React from "react";
import "./ModalPage.scss";
export interface ModalPageProps {
    onClose?: () => void;
    className?: string;
    isFlex?: boolean;
    isFullWidth?: boolean;
    dataQa?: string | null;
}
export declare class ModalPage extends React.Component<ModalPageProps> {
    constructor(props: ModalPageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onEscPressed: (event: KeyboardEvent) => void;
    render(): JSX.Element;
}
