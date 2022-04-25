/*
 * Copyright (c) 2020-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";

export interface AccordionProps {
  /** Element which is always displayed in the UI */
  title: React.ReactNode;
  /** Element that will be displayed only when the accordion is toggled on */
  children: React.ReactChild;
  /** Custom class name placed in the outermost wrapper of the component */
  className?: string;
  /** Unique id passed to data-qa-id property of the outermost wrapper of the component. Used for automation testing  */
  dataQa?: string | null;
  noPadding?: boolean;
  /** To set toggleAccdion become disable and not open accordion when click accodionHead  */
  isToggleDisabled?: boolean;
}

export const Accordion = ({
  title,
  className,
  children,
  dataQa,
  noPadding = false,
  isToggleDisabled,
}: AccordionProps) => {
  const [isOpen, toggleAccordion] = React.useState(false);

  const onToggleAccordion = () => {
    if (isToggleDisabled) return;

    toggleAccordion(!isOpen);
  };

  return (
    <div className={classNames("accordion", className)} data-qa-id={dataQa}>
      <div className={classNames("accordionHead", { isOpen })} onClick={onToggleAccordion}>
        <div className="accordionTitle">{title}</div>{" "}
        <i
          className={classNames("accordionToggler", { "fa-icon-chevron-down": !isOpen, "fa-icon-chevron-up": isOpen })}
        />
      </div>
      <div className={classNames("accordionBody", { show: isOpen })}>
        <div className={classNames("accordionContent", { noPadding })}>{children}</div>
      </div>
    </div>
  );
};
