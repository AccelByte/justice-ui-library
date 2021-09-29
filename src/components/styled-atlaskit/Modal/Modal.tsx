/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as AkModal, ActionProps } from "@atlaskit/modal-dialog";
import { ScrollBehavior } from "@atlaskit/modal-dialog/types";
import { WrapperProps } from "@atlaskit/modal-dialog/dist/es2019/components/ModalWrapper";
import "./Modal.scss";

export interface ModalProps extends Omit<WrapperProps, "scrollBehavior" | "autoFocus"> {
  isOpen?: boolean;
  scrollBehavior?: ScrollBehavior;
  autoFocus?: boolean;
  cancelText: string;
  submitText: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onSubmit?: () => void;
}

export const Modal = ({
  children,
  isOpen = false,
  scrollBehavior = "outside",
  autoFocus = false,
  cancelText,
  submitText,
  onClose,
  onSubmit,
  width = 400,
  isLoading = false,
  isDisabled = false,
  ...props
}: ModalProps) => {
  if (!isOpen) return null;

  const getActions = React.useMemo(() => {
    const actions: ActionProps[] = [
      { text: cancelText, onClick: onClose, appearance: "subtle", className: "styled-atlaskit-button subtle" },
    ];
    if (onSubmit)
      actions.push({
        isLoading,
        isDisabled,
        text: submitText,
        onClick: onSubmit,
        appearance: "primary",
        className: "styled-atlaskit-button primary",
      });

    return actions;
  }, [isLoading, isDisabled]);

  return (
    <AkModal actions={getActions} scrollBehavior={scrollBehavior} autoFocus={autoFocus} width={width} {...props}>
      {children}
    </AkModal>
  );
};
