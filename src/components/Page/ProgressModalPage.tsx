/*
 *  Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 */

import * as React from "react";
import classNames from "classnames";
import styles from "./ProgressModalPage.module.scss";
import { ModalPage, ModalPageProps } from "./ModalPage";

export interface ProgressModalPageProps extends Omit<ModalPageProps, "isFlex"> {
  title: string;
  subtitle?: string;
  step: number;
  stepLabels: string[];
  onClose: () => void;
}

export const ProgressModalPage = ({
  title,
  subtitle,
  step,
  stepLabels,
  className,
  children,
  isFullWidth = true,
  ...props
}: React.PropsWithChildren<ProgressModalPageProps>) => {
  return (
    <ModalPage className={classNames(styles.modalWrapper, className)} isFlex isFullWidth={isFullWidth} {...props}>
      <aside className={styles.progressIndicator}>
        <h1 className={styles.title}>{title}</h1>
        <h6 className={styles.subtitle}>{subtitle}</h6>
        <div className={styles.wrapper}>
          {stepLabels.map((label, index) => (
            <div className={classNames(styles.indicatorItem, { [styles.visited]: step >= index + 1 })} key={index}>
              <div className={styles.iconIndicator}>{index + 1}</div>
              <label>{label}</label>
            </div>
          ))}
        </div>
      </aside>

      <section className={styles.contentContainer}>
        <div className={styles.contentWrapper}>{children}</div>
      </section>
    </ModalPage>
  );
};
