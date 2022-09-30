/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from "react";
import { SelectProps as AkSelectProps, AsyncSelect, MenuListComponentProps } from "@atlaskit/select";
import { components } from "react-select";
import { SelectOption } from "../../types";
import "./index.scss";

export const reactSelectComponents = components;

export interface SelectAsyncProps extends Omit<AkSelectProps<SelectOption, boolean>, "onChange"> {
  onChange?: (option: SelectOption) => void;
  dataQa?: string | null;
  dataQaProps?: string | null;
  loadOptions?: (keyword: string) => Promise<SelectOption[]>;
  onLoadMoreOptions?: (keyword: string, offset: number) => Promise<SelectOption[]>;
}

const DropdownIndicator = () => <i className="icon-chevron-down" />;

const MenuList = (props: MenuListComponentProps<SelectOption>) => (
  <div className="styled-atlaskit-select__menu">
    <components.MenuList className="styled-atlaskit-select__menu-list" {...props}>
      {props.children}
    </components.MenuList>
  </div>
);

const RenderSelect = ({
  isMulti = false,
  onChange,
  dataQa = null,
  dataQaProps = null,
  loadOptions,
  onLoadMoreOptions,
  ...props
}: SelectAsyncProps) => {
  const asyncSelectRef = React.useRef<any>();
  const loadMoreDebounceFuncRef = React.useRef<NodeJS.Timer>();

  const initLoadMoreListener = () => {
    if (!asyncSelectRef.current) return;

    const selectOptionRef = asyncSelectRef.current.select.select.select.controlRef;
    const parentSelectElement = selectOptionRef.parentElement.parentElement;
    let selectMenu = parentSelectElement.querySelector(".styled-atlaskit-select__menu");
    let selectMenuList = selectMenu ? selectMenu.querySelector(".styled-atlaskit-select__menu-list") : null;

    const runLoadMoreFunc = () => {
      // refetch element by query selector
      selectMenu = parentSelectElement.querySelector(".styled-atlaskit-select__menu");
      selectMenuList = selectMenu ? selectMenu.querySelector(".styled-atlaskit-select__menu-list") : null;

      if (!selectMenuList) return;

      selectMenuList.addEventListener("scroll", (event: React.UIEvent<HTMLElement>) => {
        const { scrollHeight, scrollTop, offsetHeight } = event.currentTarget;

        const asyncInnerRefState = asyncSelectRef.current.select.state;

        const currentOptionState =
          asyncInnerRefState.loadedOptions.length > 0
            ? asyncInnerRefState.loadedOptions
            : asyncInnerRefState.defaultOptions;
        const currentOptionKey = asyncInnerRefState.loadedOptions.length > 0 ? "loadedOptions" : "defaultOptions";
        const NUM_OF_THRESHOLD = 30;

        if (scrollTop >= scrollHeight - (offsetHeight + NUM_OF_THRESHOLD)) {
          if (loadMoreDebounceFuncRef.current) clearTimeout(loadMoreDebounceFuncRef.current);

          loadMoreDebounceFuncRef.current = setTimeout(async () => {
            if (!onLoadMoreOptions) return;
            asyncSelectRef.current.select.setState({
              isLoading: true,
            });

            const loadMoreData = await onLoadMoreOptions(asyncInnerRefState.inputValue, currentOptionState.length);

            if (!asyncSelectRef.current || !asyncSelectRef.current.select) return;

            asyncSelectRef.current.select.setState({
              isLoading: false,
              [`${currentOptionKey}`]: [...currentOptionState, ...loadMoreData],
            });
          }, 500);
        }
      });
    };

    if (selectMenuList) {
      runLoadMoreFunc();
      return;
    }

    selectOptionRef.onclick = runLoadMoreFunc;
  };

  React.useLayoutEffect(() => {
    if (onLoadMoreOptions) initLoadMoreListener();
  }, [onLoadMoreOptions, asyncSelectRef]);

  return (
    <AsyncSelect
      className="styled-atlaskit-select"
      classNamePrefix="styled-atlaskit-select"
      components={{ DropdownIndicator, MenuList }}
      loadOptions={loadOptions}
      isMulti={isMulti}
      onChange={onChange ? (item) => onChange(item as SelectOption) : undefined}
      {...props}
      ref={asyncSelectRef}
    />
  );
};

export const SelectAsync = ({ dataQa = null, dataQaProps = null, ...props }: SelectAsyncProps) => {
  if (dataQa)
    return (
      <div data-qa-id={dataQa} data-qa-props={dataQaProps}>
        <RenderSelect {...props} />
      </div>
    );
  return <RenderSelect {...props} />;
};
