/*
 *
 *  * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

export const getDomWidthByRef = (currentRef: HTMLElement, querySelector: string) => {
  const refDom = currentRef.querySelector(querySelector) as HTMLElement
  if (!refDom) {
    return 0
  }
  return refDom.offsetWidth
}

export const getDomComputedStyleWidthByRef = (currentRef: HTMLElement, querySelector: string) => {
  const refDom = currentRef.querySelector(querySelector) as HTMLElement
  if (!refDom) return 0

  const computedStyle = window.getComputedStyle(refDom)
  if (!computedStyle) return 0

  return computedStyle.width
}

export const getRightPadding = (currentRef: HTMLElement, querySelector: string) => {
  const refDom = currentRef.querySelector(querySelector) as HTMLElement
  if (!refDom) {
    return 0
  }

  const computedStyle = window.getComputedStyle(refDom)
  return parseInt(computedStyle.paddingRight || '0', 10)
}

export const getHorizontalMargin = (currentRef: HTMLElement, querySelector: string) => {
  const refDom = currentRef.querySelector(querySelector) as HTMLElement
  if (!refDom) {
    return 0
  }

  const computedStyle = window.getComputedStyle(refDom)
  const marginLeft = computedStyle.marginLeft || '0'
  const marginRight = computedStyle.marginRight || '0'
  return parseInt(marginLeft + marginRight, 10)
}
