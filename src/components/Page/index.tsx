/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import "./index.scss";
import { default as classNames } from "classnames";
import { Enum } from "../../types";
import { CONTAINER_SIZE } from "../../constants";

interface PageProps {
  title?: React.ReactNode;
  className?: string;
  size?: Enum<typeof CONTAINER_SIZE>;
  dataQa?: string | null;
  headerRightElement?: React.ReactNode;
  noSidebar?: boolean;
}

export const Page = ({
  className,
  size = CONTAINER_SIZE.FULLWIDTH,
  title,
  children,
  dataQa,
  headerRightElement,
  noSidebar = false,
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
        <div className="pageComponentTitle" data-qa-id={dataQa}>
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
      <div className="pageComponentContainer">{children}</div>
    </div>
  );
};
