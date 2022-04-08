/// <reference types="react" />
import { BreadcrumbSchema, Enum } from "../../../types";
import { CONTAINER_SIZE } from "../../../constants";
import { BadgeProps } from "../../Badge";
import "./index.scss";
export interface BreadcrumbProps {
    breadcrumbLists: BreadcrumbSchema[];
    pageTitle: string;
    pageTitleBadge?: BadgeProps;
    containerSize?: Enum<typeof CONTAINER_SIZE>;
    className?: string;
    renderLink?: (item: BreadcrumbSchema, useBackButton: boolean) => JSX.Element;
    dataQa?: string | null;
}
export declare const Breadcrumb: ({ breadcrumbLists, pageTitle, containerSize, className, pageTitleBadge, renderLink, dataQa, }: BreadcrumbProps) => JSX.Element;
