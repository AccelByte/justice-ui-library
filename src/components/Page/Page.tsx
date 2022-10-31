/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";
import { default as classNames } from "classnames";
import { Enum } from "../../types";
import { CONTAINER_SIZE } from "../../constants";

export interface PageProps {
  title?: React.ReactNode;
  className?: string;
  size?: Enum<typeof CONTAINER_SIZE>;
  dataQa?: string | null;
  headerRightElement?: React.ReactNode;
  noSidebar?: boolean;
  noPadding?: boolean;
  noMarginBottom?: boolean;
}

export const Page = ({
  className,
  size = "FULLWIDTH",
  title,
  children,
  dataQa,
  headerRightElement,
  noSidebar = false,
  noMarginBottom = false,
  noPadding = false,
}: React.PropsWithChildren<PageProps>) => {
  return (
    <div
      className={classNames(
        "pageComponent",
        size === CONTAINER_SIZE.SMALL && "pageComponent--small",
        size === CONTAINER_SIZE.LARGE && "pageComponent--large",
        size === CONTAINER_SIZE.FULLWIDTH && "pageComponent--full",
        className
      )}
    >
      {title && (
        <div className={classNames("pageComponentTitle", { noMarginBottom })} data-qa-id={dataQa}>
          <div
            className={classNames("pageComponentTitleText", {
              noSidebar,
            })}
          >
            {title}
          </div>
          {headerRightElement && <div className={"extraOptionsHeader"}>{headerRightElement}</div>}
        </div>
      )}
      <div className={classNames("pageComponentContainer", { noPadding })}>{children}</div>
    </div>
  );
};
