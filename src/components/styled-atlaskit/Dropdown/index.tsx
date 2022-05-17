/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import "./index.scss";
export { ButtonDropdown } from "./ButtonDropdown";
import {
  default as DM,
  DropdownItem as DItem,
  DropdownItemGroup as DIG,
  DropdownMenuStatefulProps,
} from "@atlaskit/dropdown-menu";
import { DropdownItemProps } from "@atlaskit/dropdown-menu/dist/cjs/components/item/DropdownItem";
import { Props } from "@atlaskit/dropdown-menu/dist/cjs/components/group/DropdownItemGroup";

// doing this only to populate all props and their description in storybook docs
// otherwise we can simply export { default as DropdownMenu, DropdownItem, DropdownItemGroup } from "@atlaskit/dropdown-menu"
export const DropdownMenu = (props: Partial<DropdownMenuStatefulProps>) => <DM {...props} />;
export const DropdownItem = (props: DropdownItemProps) => <DItem {...props} />;
export const DropdownItemGroup = (props: Props) => <DIG {...props} />;
export type { DropdownMenuStatefulProps as DropdownMenuProps, DropdownItemProps, Props as DropdownItemGroupProps };
