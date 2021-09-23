/// <reference types="react" />
import { Enum } from "../../../types";
import { CONTAINER_SIZE } from "../../../constants";
import "./index.scss";
interface ItemTab {
    tabName: string;
    url: string;
    isActive: boolean;
    dataQa?: string | null;
}
interface NavigationTabProps {
    config: ItemTab[];
    changePage: (url: string) => void;
    isChangeRoute?: boolean;
    changePageKey?: (url: string) => void;
    isVertical?: boolean;
    containerSize?: Enum<typeof CONTAINER_SIZE>;
    textMore?: string;
}
export declare const NavigationTab: (props: NavigationTabProps) => JSX.Element;
export {};
