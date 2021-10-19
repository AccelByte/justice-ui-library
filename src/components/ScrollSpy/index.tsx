/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import { debounce } from "../../utils/common";
import "./index.scss";

const SPY_INTERVAL = 100;
const DEFAULT_OFFSET = 100;

export interface SpyItem {
  elementId: string;
  text: string;
}

export interface ScrollSpyProps {
  items: SpyItem[];
  className: string;
  offset?: number;
}

interface State {
  activeSessionId: string | null;
}

export class ScrollSpy extends React.Component<ScrollSpyProps, State> {
  constructor(props: ScrollSpyProps) {
    super(props);
    this.state = {
      activeSessionId: null,
    };
  }

  componentDidMount() {
    this.setActiveSection();
    window.addEventListener("scroll", this.debounceSetActiveSession);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.debounceSetActiveSession);
  }

  getElements = () => {
    const { items } = this.props;
    return items.map((item) => document.getElementById(item.elementId)).filter(Boolean);
  };

  setActiveSection = () => {
    const { items, offset } = this.props;
    if (items.length <= 0) return;

    let currentSection = this.props.items[0].elementId;
    const pageOffsetToTop = offset || DEFAULT_OFFSET;

    for (let i = 0; i < items.length; i++) {
      const section = this.getElements()[i];
      if (!section) return;
      if (window.pageYOffset + pageOffsetToTop > section.offsetTop) {
        currentSection = section.id;
      }
    }

    this.setState({ activeSessionId: currentSection });
  };

  debounceSetActiveSession = debounce(this.setActiveSection, SPY_INTERVAL);

  scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const { className } = this.props;
    const { activeSessionId } = this.state;

    return (
      <ul className={classNames("scrollSpyContainer", className)}>
        {this.props.items.map((item, index) => (
          <li
            className={classNames({ active: activeSessionId === item.elementId })}
            key={`${item.elementId}-${index}`}
            onClick={() => this.scrollTo(item.elementId)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}
