/*
 *
 *  * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import * as React from "react";
import { ValidFieldText, ValidFieldTextProps } from "./ValidFieldText";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";
import "./ValidFieldPassword.scss";
import { generatePassword } from "../../utils";
import { DEFAULT_PASSWORD_AND_SECRET_REGEX } from "../../constants";
import { strengthLevelOrder } from "../../constants";
import { Button } from "../styled-atlaskit/Button/Button";
import { translation } from "../../utils/i18n";

export interface ValidFieldPasswordProps extends Omit<ValidFieldTextProps, "type" | "rightIcon" | "isFloat"> {
  strengthLevelIndicator?: keyof typeof strengthLevelOrder;
  hasGeneratePassword?: boolean;
  customPattern?: string;
}

interface State {
  isIconEyeOff: boolean;
  levelColor: string;
}

export class ValidFieldPassword extends React.Component<ValidFieldPasswordProps, State> {
  constructor(props: ValidFieldPasswordProps) {
    super(props);
    this.state = {
      isIconEyeOff: true,
      levelColor: "",
    };
  }

  toolTipIconEye = React.createRef<HTMLElement>();

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  componentWillUnmount() {
    this.hideTooltip();
  }

  static getDerivedStateFromProps(
    props: { strengthLevelIndicator: keyof typeof strengthLevelOrder },
    state: { levelColor: string }
  ) {
    if (props.strengthLevelIndicator !== state.levelColor) {
      return {
        levelColor: props.strengthLevelIndicator,
      };
    }

    return "";
  }

  toggleIconEyeOff = () => {
    this.setState(
      (prevState: State) => ({
        isIconEyeOff: !prevState.isIconEyeOff,
      }),
      () => this.resetTooltipIconEye()
    );
  };

  resetTooltipIconEye = () => {
    if (this.toolTipIconEye && this.toolTipIconEye.current) {
      ReactTooltip.hide(this.toolTipIconEye.current);
      ReactTooltip.show(this.toolTipIconEye.current);
    }
  };

  hideTooltip = () => {
    if (this.toolTipIconEye && this.toolTipIconEye.current) {
      ReactTooltip.hide(this.toolTipIconEye.current);
    }
  };

  handleEyeIcon = () => {
    const { isIconEyeOff } = this.state;
    return (
      <>
        <i
          ref={this.toolTipIconEye}
          data-for="eyeInfo__tooltip"
          data-tip={isIconEyeOff ? translation("password.viewPassword") : translation("password.hiddenPassword")}
          data-place="top"
          className={classNames("password-eye-icon", {
            "fa-icon-eye": !isIconEyeOff,
            "fa-icon-eye-off": isIconEyeOff,
          })}
          onClick={this.toggleIconEyeOff}
        />
        <ReactTooltip effect="solid" id="eyeInfo__tooltip" html={true} />
      </>
    );
  };

  handleFieldType = () => {
    return this.state.isIconEyeOff ? "password" : "text";
  };

  handleGeneratePassword = () => {
    const { customPattern, onChange, name } = this.props;
    if (!onChange) return;

    const passwordPattern = customPattern || DEFAULT_PASSWORD_AND_SECRET_REGEX;
    const value = generatePassword(passwordPattern);
    // @ts-ignore
    onChange({ target: { name, value } });
  };

  handleGenerateText = () => {
    const { hasGeneratePassword, strengthLevelIndicator, customField } = this.props;
    const { levelColor } = this.state;
    return (
      <>
        {hasGeneratePassword && (
          <Button appearance="link" spacing="none" className="generate-password" onClick={this.handleGeneratePassword}>
            {translation("password.generateNew")}
          </Button>
        )}
        {strengthLevelIndicator && (
          <span className={classNames("level", levelColor)}>{translation(`password.${strengthLevelIndicator}`)}</span>
        )}
        {customField}
      </>
    );
  };

  render() {
    return (
      <div className="valid-field-password">
        <ValidFieldText
          {...this.props}
          rightIcon={this.handleEyeIcon()}
          type={this.handleFieldType()}
          className={classNames(this.props.className, "password-field-text")}
          customField={this.handleGenerateText()}
        />
      </div>
    );
  }
}
