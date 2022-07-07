/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Modal, ModalProps } from ".";
import { Button } from "../..";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsOpen(!!args.isOpen);
  }, [args.isOpen]);

  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  submitText: "Submit",
  cancelText: "Cancel",
  isOpen: true,
  children: <p style={{ marginTop: 20 }}>Modal Content</p>,
};
