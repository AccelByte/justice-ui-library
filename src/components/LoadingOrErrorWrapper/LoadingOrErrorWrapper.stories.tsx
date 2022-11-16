/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { LoadingOrErrorWrapper, LoadingOrErrorWrapperProps } from "./LoadingOrErrorWrapper";

export default {
  title: "Components/Loading/LoadingOrErrorWrapper",
  component: LoadingOrErrorWrapper,
} as Meta;

const Template: Story<LoadingOrErrorWrapperProps> = (args) => {
  const [error, setError] = React.useState<Error | null>(args.error || null);

  const refreshPage = () => setError(null);

  React.useEffect(() => {
    setError(args.error || null)
  }, [args.error])

  return <LoadingOrErrorWrapper {...args} error={error} onErrorActionClick={refreshPage} />;
};

export const Example = Template.bind({});
Example.args = {
  isLoading: true,
  children: <p>some content</p>,
  isRefreshable: true,
  isFullHeight: true,
  errorTitle: "Error Title",
  errorMessage: "Error message",
  error: new Error("error"),
  dataQa: "data QA"
};
