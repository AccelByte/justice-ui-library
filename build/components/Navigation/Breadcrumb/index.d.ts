import * as React from "react";
import { BreadcrumbSchema, Enum } from "../../../types";
import { CONTAINER_SIZE } from "../../../constants";
import { BadgeProps } from "../../Badge";
import "./index.scss";
import "../../../styles/icons/index.scss";
export interface BreadcrumbProps {
    breadcrumbLists: BreadcrumbSchema[];
    pageTitle: string;
    pageTitleBadge?: BadgeProps;
    containerSize?: Enum<typeof CONTAINER_SIZE>;
    className?: string;
}
export declare class Breadcrumb extends React.Component<BreadcrumbProps> {
    render(): JSX.Element;
}
