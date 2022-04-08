/// <reference types="react" />
import { Enum } from "../../../types";
import { CONTAINER_SIZE } from "../../../constants";
import "./index.scss";
export interface ItemTab {
    tabName: string;
    url: string;
    isActive: boolean;
    dataQa?: string | null;
}
export interface NavigationTabProps {
    config: ItemTab[];
    changePage?: (url: string) => void;
    isChangeRoute?: boolean;
    changePageKey?: (url: string) => void;
    isVertical?: boolean;
    containerSize?: Enum<typeof CONTAINER_SIZE>;
}
export declare const NavigationTab: ({ isVertical, isChangeRoute, containerSize, config, changePageKey, changePage, }: NavigationTabProps) => JSX.Element;
