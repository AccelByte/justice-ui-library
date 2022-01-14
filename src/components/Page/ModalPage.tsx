/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import classNames from "classnames";
import * as React from "react";
import { translation } from "../../utils/i18n";
import "./ModalPage.scss";

export interface ModalPageProps {
  onClose?: () => void;
  className?: string;
  isFlex?: boolean;
  isFullWidth?: boolean;
  dataQa?: string | null;
}

export class ModalPage extends React.Component<ModalPageProps> {
  constructor(props: ModalPageProps) {
    super(props);
  }

  componentDidMount(): void {
    window.addEventListener("keydown", this.onEscPressed, false);
  }

  componentWillUnmount(): void {
    window.removeEventListener("keydown", this.onEscPressed, false);
  }

  onEscPressed = (event: KeyboardEvent) => {
    const { onClose } = this.props;
    if (!onClose) return;
    if (["Esc", "Escape"].includes(event.key)) {
      onClose();
    }
  };

  render() {
    const { onClose, children, className, isFlex, isFullWidth, dataQa } = this.props;
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
  }
}
