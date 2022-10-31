/*
 * Copyright (c) 2020-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";
import "../../styles/icons/fa_icons.css";

export interface AccordionProps {
  /** Element which is always displayed in the UI */
  title: React.ReactNode;
  /** Element that will be displayed only when the accordion is toggled on */
  children: React.ReactChild;
  /** Custom class name placed in the outermost wrapper of the component */
  className?: string;
  /** A testId prop is provided for specified elements, which is a unique string that appears as a data attribute `data-qa-id` in the rendered code, serving as a hook for automated tests.  */
  dataQa?: { id?: string | null; props?: string | null };
  /** If true, remove padding from .accordionContent */
  noPadding?: boolean;
  /** To disable toggle upon clicking the accordion  */
  isToggleDisabled?: boolean;
}

export const Accordion = ({
  title,
  className,
  children,
  dataQa,
  noPadding = false,
  isToggleDisabled = false,
}: AccordionProps) => {
  const [isOpen, toggleAccordion] = React.useState(false);

  const onToggleAccordion = () => {
    if (isToggleDisabled) return;

    toggleAccordion(!isOpen);
  };

  return (
    <div className={classNames("accordion", className)}>
      <div className={classNames("accordionHead", { isOpen })} onClick={onToggleAccordion}>
        <div className="accordionTitle">{title}</div>
        <i
          className={classNames("accordionToggler", { "icon-chevron-down": !isOpen, "icon-chevron-up": isOpen })}
          data-qa-id={dataQa?.id}
          data-qa-props={dataQa?.props}
        />
      </div>
      <div className={classNames("accordionBody", { show: isOpen })}>
        <div className={classNames("accordionContent", { noPadding })}>{children}</div>
      </div>
    </div>
  );
};
