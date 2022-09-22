/*
 *
 *  * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import 'simplebar/dist/simplebar.min.css'
import * as React from "react";
import { ControlProps, default as AkSelect, MenuListComponentProps, OptionProps, SelectProps } from "@atlaskit/select";
import { components, GroupTypeBase, SingleValueProps } from "react-select";
import { default as classNames } from "classnames";
import "./SelectWithLogo.scss";
import { default as ReactTooltip } from "react-tooltip";
import { getDomWidthByRef } from "../../utils/dom";
import { translation } from "../../utils/i18n";
import { SelectOption } from "../../types";

import { default as SimpleBar } from "simplebar-react";

export interface SelectItemWithLogo {
  label: string;
  value: string;
  logo: React.ReactNode;
  optionClassName?: string;
}

export interface GroupedSelectItemWithLogo {
  label: string;
  options?: SelectItemWithLogo[];
}

const customizedGroupLabel = (data: GroupTypeBase<SelectItemWithLogo>) => {
  return (
    <div className="custom-groupLabel-selectWithLogo">
      <span>{data.label}</span>
    </div>
  );
};

const ControlComponent: React.FC<ControlProps<SelectItemWithLogo>> = ({ ...props }) => {
  const controlRef = React.useRef<HTMLDivElement>(null);
  const [isEllipsisShowed, setIsEllipsisShowed] = React.useState(false);

  React.useEffect(() => {
    if (controlRef && controlRef.current) {
      setIsEllipsisShowed(
        getDomWidthByRef(controlRef.current, ".react-select__single-value") >
          getDomWidthByRef(controlRef.current, ".custom-singleValue-label")
      );
    }
  }, [props.selectProps.value]);

  const selectedOption = props.selectProps.value;
  const tooltipProps = isEllipsisShowed
    ? { "data-tip": (selectedOption as SelectItemWithLogo[])[0]?.label, "data-place": "right" }
    : {};
  return (
    <div className={"custom-control-selectWithLogo"} {...tooltipProps}>
      <div ref={controlRef}>
        <components.Control {...props} />
      </div>
    </div>
  );
};

interface PropsSingleValue extends Omit<SingleValueProps<SelectItemWithLogo>, "isMenuOpen"> {
  isMenuOpen: boolean;
}

const SingleValue: React.FC<PropsSingleValue> = ({ ...props }) => {
  return (
    <div className="custom-singleValue-selectWithLogo">
      {!props.isMenuOpen && (
        <>
          {props.data.logo}
          <div className="custom-singleValue-label">
            <components.SingleValue {...props}>{props.children}</components.SingleValue>
          </div>
        </>
      )}
    </div>
  );
};

export interface MenuListProps extends MenuListComponentProps<SelectItemWithLogo> {
  Simplebar: any
}

const MenuList: React.FC<MenuListComponentProps<SelectItemWithLogo>> = ({ ...props }) => {
  return (
    <div className="custom-menuList-selectWithLogo">
      <SimpleBar autohide="true">
        <components.MenuList {...props}>{props.children}</components.MenuList>
      </SimpleBar>
    </div>
  );
};

const renderOptionLabelWithLogo = (
  { label, logo }: SelectItemWithLogo,
  isSelected = false,
  isEllipsisActive: boolean
) => {
  const tooltipProps = isEllipsisActive ? { "data-tip": label, "data-place": "right" } : {};
  return (
    <div>
      <div className="optionWithLogo" {...tooltipProps}>
        {logo}
        <div className={classNames("optionLabel", { selected: isSelected })}>
          <div>
            <span>{label}</span>
          </div>
          {isSelected && <i className="icon-ab-namespace-check" />}
        </div>
      </div>
    </div>
  );
};

export interface OptionTemplateWithDataQaProps extends OptionProps<SelectItemWithLogo> {
  dataQa?: string;
  dataQaProps?: string;
}

const OptionTemplateWithDataQa = (props: OptionTemplateWithDataQaProps) => {
  React.useEffect(() => {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }, []);

  const optionRef = React.useRef<HTMLDivElement>(null);
  const [isEllipsisActive, setIsEllipsisActive] = React.useState(false);
  React.useEffect(() => {
    if (optionRef && optionRef.current) {
      setIsEllipsisActive(
        getDomWidthByRef(optionRef.current, ".optionLabel div span") >
          getDomWidthByRef(optionRef.current, ".optionLabel") -
            getDomWidthByRef(optionRef.current, ".icon-ab-namespace-check")
      );
    }
  }, []);

  const {
    innerRef,
    innerProps: { ...innerProps },
    dataQa,
    dataQaProps,
  } = props;

  return (
    <div
      {...innerProps}
      ref={innerRef}
      data-qa-id={dataQa}
      data-qa-props={dataQaProps}
      className={classNames(
        "custom-option-selectWithLogo",
        "react-select__option",
        {
          "react-select__option--isDisabled": props.isDisabled,
          "react-select__option--isFocused": props.isFocused,
          "react-select__option--isSelected": props.isSelected,
          "react-select__option--isMulti": props.isMulti,
          "react-select__option--isRtl": props.isRtl,
        },
        props.data.optionClassName
      )}
    >
      <div ref={optionRef}>{renderOptionLabelWithLogo(props.data, props.isSelected, isEllipsisActive)}</div>
    </div>
  );
};

export interface SelectWithLogoProps extends SelectProps<SelectItemWithLogo> {
  dataQa?: string;
  dataQaProps?: string;
  Simplebar: any;
}

export const SelectWithLogo: React.FC<SelectWithLogoProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => {
    setIsMenuOpen(false);
    ReactTooltip.hide();
  };

  React.useEffect(() => {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  });

  const newProps = {
    ...props,
    components: {
      ...props.components,
      MenuList,
      SingleValue: ({ ...props }: SingleValueProps<SelectItemWithLogo>) => (
        <SingleValue {...props} isMenuOpen={isMenuOpen} />
      ),
      Option:
        props.components && props.components.Option
          ? props.components.Option
          : (optionProps: OptionTemplateWithDataQaProps) => (
              <OptionTemplateWithDataQa {...optionProps} dataQa={props.dataQa} dataQaProps={props.dataQaProps} />
            ),
      Control: ControlComponent,
    },
  };
  return (
    <AkSelect
      {...newProps}
      formatGroupLabel={customizedGroupLabel}
      onMenuClose={onMenuClose}
      onMenuOpen={onMenuOpen}
      filterOption={({ label }: SelectOption, inputValue: string) =>
        label.toString().toLowerCase().includes(inputValue.toLowerCase())
      }
      noOptionsMessage={() => translation("common.select.noResults")}
      classNamePrefix="react-select"
      className="react-select__container"
    />
  );
};
