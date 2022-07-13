/// <reference types="react" />
import { Enum } from "../../types";
import { CONTAINER_SIZE } from "../../constants";
import "./index.scss";
import "../../styles/icons/fa_icons.css";
export interface ItemTab {
    tabName: string;
    url: string;
    isActive: boolean;
    dataQa?: string | null;
    dataQaProps?: string | null;
    id?: string;
}
export interface NavigationTabProps {
    config: ItemTab[];
    changePage?: (url: string) => void;
    isChangeRoute?: boolean;
    changePageKey?: (url: string) => void;
    isVertical?: boolean;
    containerSize?: Enum<typeof CONTAINER_SIZE>;
    noPadding?: boolean;
}
export declare const NavigationTab: ({ isVertical, isChangeRoute, containerSize, noPadding, config, changePageKey, changePage, }: NavigationTabProps) => JSX.Element;
