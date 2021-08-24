/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import classNames from "classnames";
import "./index.scss";

export interface ModalFormProps {
  children: React.ReactNode;
  fullHorizontal?: boolean;
}

export const ModalForm = ({ children, fullHorizontal = false }: ModalFormProps) => (
  <div
    className={classNames("styled-atlaskit-modal-form", {
      "full-horizontal": fullHorizontal,
    })}
  >
    {children}
  </div>
);

export const ModalMessage = ({ children }: { children: React.ReactNode }) => (
  <div className="styled-atlaskit-modal-message">{children}</div>
);
