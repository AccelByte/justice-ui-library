/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Banner, APPEARANCE_TYPE, BannerProps } from "./Banner";

export default {
  title: "Components/Banner",
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => {
  const [isShown, setIsShown] = useState(true);

  const dismissBanner = () => {
    setIsShown(false);
  };

  const showBanner = () => {
    setIsShown(true);
  };
  return (
    <div style={{ maxWidth: 300 }}>
      {isShown && <Banner {...args} dismissBanner={dismissBanner} />}
      {!isShown && (
        <p style={{ fontFamily: "Roboto", cursor: "pointer" }} onClick={showBanner}>
          Show Banner
        </p>
      )}
    </div>
  );
};

export const Success = Template.bind({});
Success.args = { appearance: APPEARANCE_TYPE.success, message: "Success banner" };

export const Error = Template.bind({});
Error.args = {
  appearance: APPEARANCE_TYPE.error,
  message: "Error banner",
};

export const Info = Template.bind({});
Info.args = { appearance: APPEARANCE_TYPE.info, message: "Info banner" };

export const Warning = Template.bind({});
Warning.args = { appearance: APPEARANCE_TYPE.warning, message: "Warning banner" };
