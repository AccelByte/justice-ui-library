/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ProgressModalPage, ProgressModalPageProps } from "./ProgressModalPage";
import "../../styles/icons/ab_icons.css";
import { Button } from "..";

export default {
  title: "Components/Page/ProgressModalPage",
  component: ProgressModalPage,
} as Meta;

const Template: Story<ProgressModalPageProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [step, setStep] = React.useState<number>(args.step);

  const clickPrev = () => {
    if (step === 1) return;
    setStep((prev) => Math.min(args.stepLabels.length, prev - 1));
  };

  const clickNext = () => {
    if (step === args.stepLabels.length) return;
    setStep((prev) => Math.max(1, prev + 1));
  };

  React.useEffect(() => {
    setStep(args.step);
  }, [args.step]);

  return (
    <div style={{ fontFamily: "Roboto" }}>
      {!isOpen && <Button onClick={() => setIsOpen(true)}>Open Progress Modal Page</Button>}
      {isOpen && (
        <ProgressModalPage {...args} onClose={() => setIsOpen(false)} step={step}>
          Click the X button to show the docs when you are in Docs section
          <div style={{ marginTop: 20 }}>
            <Button appearance="subtle" onClick={clickPrev} isDisabled={step <= 1}>
              Prev
            </Button>
            <Button onClick={clickNext} isDisabled={step >= args.stepLabels.length}>
              Next
            </Button>
          </div>
        </ProgressModalPage>
      )}
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  title: "Progress Indicator Title",
  stepLabels: ["Step 1", "Step 2", "Step 3"],
  step: 1,
};
