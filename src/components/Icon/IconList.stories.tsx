/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import "../../styles/icons/ab_icons.css";
import { AccelIconsList } from "./IconList";
import { Button } from "../styled-atlaskit/Button/Button";
import { FieldLabel } from "../Form/utility";

export default {
  title: "Iconography/Icons",
} as Meta;

export const AccelIcons: Story = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", rowGap: 20, fontFamily: "Roboto" }}>
      {AccelIconsList.map((icon, index) => (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} key={index}>
          <i className={icon} style={{ fontSize: 24, marginBottom: 10 }} />
          <span style={{textAlign: "center"}}>{icon}</span>
        </div>
      ))}
    </div>
  );
};

export const FeatherIcons: Story = () => {
  const handleButtonClicked = () => {
    const newWindow = window.open("https://feathericons.com/", "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div style={{ height: "100vh" }}>
      <FieldLabel label={"All the feather icons can be seen in their website"} />
      <Button onClick={() => handleButtonClicked()} appearance="outline">
        Go to Feather Icons
      </Button>
    </div>
  );
};
