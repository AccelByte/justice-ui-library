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
import { PASSWORD_STRENGTH_METER } from "../../constants";
import { Button } from "../Button";
import { translation } from "../../utils/i18n";
import "../../styles/icons/fa_icons.css";
import DOMPurify from "dompurify";
import { debounce } from "../../utils/common";
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
import { OptionsType } from "@zxcvbn-ts/core/dist/types";

export interface ValidFieldPasswordProps extends Omit<ValidFieldTextProps, "type" | "rightIcon" | "isFloat"> {
  hasGeneratePassword?: boolean;
  customPattern?: string;
  hasPasswordStrengthMeter?: boolean;
  zxcvbnOption?: OptionsType;
}

interface State {
  isIconEyeOff: boolean;
  passwordStrengthScore: number | null;
}
const CALCULATE_PASSWORD_STRENGTH_INTERVAL = 100;

export class ValidFieldPassword extends React.Component<ValidFieldPasswordProps, State> {
  constructor(props: ValidFieldPasswordProps) {
    super(props);
    this.state = {
      isIconEyeOff: true,
      passwordStrengthScore: 0,
    };
  }
  toolTipIconEye = React.createRef<HTMLElement>();

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);

    const { zxcvbnOption } = this.props;
    zxcvbnOptions.setOptions(zxcvbnOption);
  }

  componentWillUnmount() {
    this.hideTooltip();
  }

  componentDidUpdate(prevProps: ValidFieldPasswordProps) {
    const { hasPasswordStrengthMeter, value } = this.props;
    if (hasPasswordStrengthMeter && prevProps.value !== value) this.debounceCalculatePasswordStrength(value);
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
          data-tip={DOMPurify.sanitize(
            isIconEyeOff ? translation("password.viewPassword") : translation("password.hiddenPassword")
          )}
          data-html={true}
          data-place="top"
          className={classNames("password-eye-icon", {
            "icon-eye": !isIconEyeOff,
            "icon-eye-off": isIconEyeOff,
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
    onChange({ target: { name, value } });
  };

  handleGenerateText = () => {
    const { hasGeneratePassword, customField, hasPasswordStrengthMeter } = this.props;
    const { passwordStrengthScore } = this.state;
    const strengtLevelText = this.getStrengthLevelBasedOnScore(passwordStrengthScore);
    return (
      <>
        {hasPasswordStrengthMeter && passwordStrengthScore !== null && (
          <div className="password-strength-meter">
            <div className={classNames("strength-meter-bar", strengtLevelText)}>
              {Object.keys(PASSWORD_STRENGTH_METER).map((strengthLevel, index) => (
                <div
                  key={`bar-${strengthLevel}`}
                  className={classNames("bar", { fill: index <= passwordStrengthScore })}
                />
              ))}
            </div>
            <span className={classNames("strength-meter-label")}>{translation("password.strength.label")}</span>
            <span className={classNames("strength-meter-level", strengtLevelText)}>
              {translation(`password.strength.level.${strengtLevelText}`)}
            </span>
          </div>
        )}
        {hasGeneratePassword && (
          <Button appearance="link" spacing="none" className="generate-password" onClick={this.handleGeneratePassword}>
            {translation("password.generateNew")}
          </Button>
        )}
        {customField}
      </>
    );
  };

  getStrengthLevelBasedOnScore = (score: number | null) => {
    switch (score) {
      case 0:
        return PASSWORD_STRENGTH_METER["veryWeak"];
      case 1:
        return PASSWORD_STRENGTH_METER["weak"];
      case 2:
        return PASSWORD_STRENGTH_METER["fair"];
      case 3:
        return PASSWORD_STRENGTH_METER["strong"];
      case 4:
        return PASSWORD_STRENGTH_METER["veryStrong"];
    }
  };

  calculatePasswordStrength = (password: string) => {
    if (!password) return this.setState({ passwordStrengthScore: null });
    const { score } = zxcvbn(password);
    this.setState({ passwordStrengthScore: score });
  };

  debounceCalculatePasswordStrength = debounce(this.calculatePasswordStrength, CALCULATE_PASSWORD_STRENGTH_INTERVAL);

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
