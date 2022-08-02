import { ModalHeader, ModalFooter } from "@atlaskit/modal-dialog";
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
export declare const Modal: ({ children, isOpen, scrollBehavior, autoFocus, cancelText, submitText, onClose, onSubmit, width, isLoading, isDisabled, withAction, ...props }: ModalProps) => JSX.Element;
