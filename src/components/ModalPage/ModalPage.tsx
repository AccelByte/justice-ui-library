/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import * as React from "react";
import { translation } from "../../utils/i18n";
import "./index.scss";

export interface ModalPageProps {
  onClose?: () => void;
  className?: string;
  isFlex?: boolean;
  isFullWidth?: boolean;
  dataQa?: string | null;
}

export const ModalPage = ({
  onClose,
  children,
  className,
  isFlex,
  isFullWidth,
  dataQa,
}: React.PropsWithChildren<ModalPageProps>) => {
  React.useEffect(() => {
    window.addEventListener("keydown", onEscPressed, false);

    return () => {
      window.removeEventListener("keydown", onEscPressed, false);
    };
  }, []);

  const onEscPressed = (event: KeyboardEvent) => {
    if (!onClose) return;
    if (["Esc", "Escape"].includes(event.key)) {
      onClose();
    }
  };

  return (
    <div className={classNames("modal-page-container", className)}>
      <div className="close-modal-page-container">
        <div className="close" tabIndex={0} aria-disabled onClick={onClose} data-qa-id={dataQa}>
          <i className="icon-ab-x" />
        </div>
        <span>{translation("modalPage.esc")}</span>
      </div>
      <div className={classNames("content", { isFlex, isFullWidth })}>{children}</div>
    </div>
  );
};
