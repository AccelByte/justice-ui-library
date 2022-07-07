/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as AkModal, ActionProps, ModalHeader, ModalFooter, ModalTransition } from "@atlaskit/modal-dialog";
import { ScrollBehavior } from "@atlaskit/modal-dialog/types";
import { WrapperProps } from "@atlaskit/modal-dialog/dist/es2019/components/ModalWrapper";
import "./index.scss";

export interface ModalProps extends Omit<WrapperProps, "scrollBehavior" | "autoFocus"> {
  isOpen?: boolean;
  scrollBehavior?: ScrollBehavior;
  autoFocus?: boolean;
  cancelText?: string;
  submitText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onSubmit?: () => void;
  withAction?: boolean;
}

export { ModalHeader, ModalFooter };
export type { ScrollBehavior as ModalScrollBehavior };

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
  withAction = true,
  ...props
}: ModalProps) => {
  const getActions = React.useMemo(() => {
    if (!withAction) return;

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
    <ModalTransition>
      {isOpen && (
        <AkModal actions={getActions} scrollBehavior={scrollBehavior} autoFocus={autoFocus} width={width} {...props}>
          {children}
        </AkModal>
      )}
    </ModalTransition>
  );
};
