import * as React from "react";
import "./Page.scss";
import { Enum } from "../../types";
import { CONTAINER_SIZE } from "../../constants";
export interface PageProps {
    title?: React.ReactNode;
    className?: string;
    size?: Enum<typeof CONTAINER_SIZE>;
    dataQa?: string | null;
    headerRightElement?: React.ReactNode;
    noSidebar?: boolean;
    noPadding?: boolean;
    noMarginBottom?: boolean;
}
export declare const Page: ({ className, size, title, children, dataQa, headerRightElement, noSidebar, noMarginBottom, noPadding, }: React.PropsWithChildren<PageProps>) => JSX.Element;
