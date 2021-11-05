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
import { generatePassword } from "../../utils/password";
import { DEFAULT_PASSWORD_AND_SECRET_REGEX } from "../../constants/common";
import { strengthLevelOrder, translatedStrengthLevelOrder } from "../../constants/password";

export interface ValidFieldPasswordProps extends ValidFieldTextProps {
  strengthLevelIndicator?: keyof typeof strengthLevelOrder;
  translateStrengthLevel?: (level: keyof typeof strengthLevelOrder) => string;
  passHideText: string;
  passVisibleText: string;
  hasGeneratePassword?: boolean;
  defaultGenerateText?: string;
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
    if (this.props.strengthLevelIndicator) this.handleStrengthIndicator();
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
  }

  componentWillUnmount() {
    this.hideTooltip();
  }

  handleStrengthIndicator = () => {
    const { strengthLevelIndicator } = this.props;
    switch (strengthLevelIndicator) {
      case strengthLevelOrder.poor:
        this.setState({ levelColor: strengthLevelOrder.poor });
        break;
      case strengthLevelOrder.weak:
        this.setState({ levelColor: strengthLevelOrder.weak });
        break;
      case strengthLevelOrder.average:
        this.setState({ levelColor: strengthLevelOrder.average });
        break;
      case strengthLevelOrder.good:
        this.setState({ levelColor: strengthLevelOrder.good });
        break;
      case strengthLevelOrder.excellent:
        this.setState({ levelColor: strengthLevelOrder.excellent });
    }
  };

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
    const { passHideText, passVisibleText } = this.props;
    const { isIconEyeOff } = this.state;
    return (
      <>
        <i
          ref={this.toolTipIconEye}
          data-for="eyeInfo__tooltip"
          data-tip={isIconEyeOff ? passHideText : passVisibleText}
          data-place="top"
          className={classNames("password-eye-icon", {
            "fa-icon-eye": !isIconEyeOff,
            "fa-icon-eye-off": isIconEyeOff,
          })}
          onClick={this.toggleIconEyeOff}
        />
        <ReactTooltip effect="solid" id="eyeInfo__tooltip" />
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
    onChange({ currentTarget: { name, value } });
  };

  render() {
    const { hasGeneratePassword, defaultGenerateText, strengthLevelIndicator, translateStrengthLevel } = this.props;
    const { levelColor } = this.state;

    return (
      <div className="valid-field-password">
        <ValidFieldText
          {...this.props}
          rightIcon={this.handleEyeIcon()}
          type={this.handleFieldType()}
          className={classNames(this.props.className, "password-field-text")}
        />
        {hasGeneratePassword && (
          <span className="generate-password" onClick={this.handleGeneratePassword}>
            {defaultGenerateText}
          </span>
        )}
        {strengthLevelIndicator && (
          <span className={classNames("level", levelColor)}>
            {!!translateStrengthLevel
              ? translateStrengthLevel(strengthLevelIndicator)
              : translatedStrengthLevelOrder[strengthLevelIndicator]}
          </span>
        )}
      </div>
    );
  }
}
