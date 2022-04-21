/// <reference types="react" />
import "./DropdownMenu.scss";
import { DropdownMenuStatefulProps } from "@atlaskit/dropdown-menu/types";
import { ButtonAppearances } from "@atlaskit/button";
declare type DropdownAppearance = Extract<ButtonAppearances, "subtle" | "primary">;
export interface DropDownMenuProps extends DropdownMenuStatefulProps {
    /** Set if the dropdown menu button is disabled. */
    isDisabled?: boolean;
    /** The base styling to apply to the dropdown menu button. */
    buttonAppearance?: DropdownAppearance;
    /** Set className props to the dropdown menu button */
    buttonClassName?: string;
    dataQa?: string | null;
}
export declare const DropdownMenu: ({ isDisabled, dataQa, buttonAppearance, triggerType, buttonClassName, children, ...props }: DropDownMenuProps) => JSX.Element;
export {};
