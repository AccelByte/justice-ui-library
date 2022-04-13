/// <reference types="react" />
import "./index.scss";
export { ButtonDropdown } from "./ButtonDropdown";
import { DropdownMenuStatefulProps } from "@atlaskit/dropdown-menu";
import { DropdownItemProps } from "@atlaskit/dropdown-menu/dist/cjs/components/item/DropdownItem";
import { Props } from "@atlaskit/dropdown-menu/dist/cjs/components/group/DropdownItemGroup";
export declare const DropdownMenu: (props: DropdownMenuStatefulProps) => JSX.Element;
export declare const DropdownItem: (props: DropdownItemProps) => JSX.Element;
export declare const DropdownItemGroup: (props: Props) => JSX.Element;
export type { DropdownMenuStatefulProps as DropdownMenuProps, DropdownItemProps, Props as DropdownItemGroupProps };
