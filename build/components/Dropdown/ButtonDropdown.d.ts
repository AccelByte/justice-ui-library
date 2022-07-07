/// <reference types="react" />
import "./ButtonDropdown.scss";
import { DropdownMenuStatefulProps } from "@atlaskit/dropdown-menu/types";
import { ButtonAppearances } from "@atlaskit/button";
declare type DropdownAppearance = Extract<ButtonAppearances, "subtle" | "primary">;
export interface ButtonDropdownProps extends Partial<Omit<DropdownMenuStatefulProps, "triggerType">> {
    /** Set if the dropdown menu button is disabled. */
    isDisabled?: boolean;
    /** The base styling to apply to the dropdown menu button. */
    buttonAppearance?: DropdownAppearance;
    /** Set className props to the dropdown menu button */
    buttonClassName?: string;
    dataQa?: string | null;
}
export declare const ButtonDropdown: ({ children, isDisabled, dataQa, buttonAppearance, buttonClassName, ...props }: ButtonDropdownProps) => JSX.Element;
export {};
