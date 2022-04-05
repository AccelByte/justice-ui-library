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
}

export const Accordion = ({ title, className, children, dataQa }: AccordionProps) => {
  const [isOpen, toggleAccordion] = React.useState(false);
  return (
    <div className={classNames("accordion", className)} data-qa-id={dataQa}>
      <div className={classNames("accordionHead", { isOpen })} onClick={() => toggleAccordion(!isOpen)}>
        <div className="accordionTitle">{title}</div>{" "}
        <i
          className={classNames("accordionToggler", { "fa-icon-chevron-down": !isOpen, "fa-icon-chevron-up": isOpen })}
        />
      </div>
      <div className={classNames("accordionBody", { show: isOpen })}>
        <div className="accordionContent">{children}</div>
      </div>
    </div>
  );
};
