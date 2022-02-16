# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.1.40]
### Added
- `StyledToggle` component
- `noPadding` prop in `DynamicTable` to conditionally add `no-padding` class

### Refactored
- Export `ButtonAppearance` from `Button` and `PopoverPlacement` from `InlinePopover`
- Move some packages that aren't used after build to devDependencies
- Set `label` prop in `Checkbox` and `StyledRadioTabVertical` as optional

## [0.1.39]
### Fixed
- Build is not up to date with src

## [0.1.38]
### Fixed
- `ButtonWithIcon` isDisabled props not working

## [0.1.37]
### Added
- Check whether `Tooltip`'s `children` overflows every `window.resize` to show or hide the tooltip based on the viewport

### Refactored
- Update `Button`'s height from `35px` to `36px`

## [0.1.36]
### Added
- `dataQa` prop in components that trigger event (click, change, etc) and previously don't have the prop yet

### Fixed
- Update active and hover state in some input components and dropdown
- Revamp background and text color of `Badge`
- Fix `NavigationTab` won't update its UI when the active tab changes if `isVertical` is `true`
- Fix `Button` background color is not greyed out on hover if `appearance` is `success`

### Refactored
- Change `DropDownMenu` to `DropdownMenu`

## [0.1.35]
### Added
- Show all iconography to storybook
- `value` and `isDisabled` props in `Checkbox` component
- `dataQa` prop in `ModalPage`
- `children` and `customComponent` props in `DynamicTable`

## [0.1.34]
### Added
- Publish the components storybook to github page
- Add more stories file to the components that don't have it yet

## [0.1.33]
### Added
- `ModalPage` and `ProgressModalPage` component
- Bring back `isInvalid` prop to `ValidFieldText` and `ValidFieldTextArea` to conditionally show error message
- Optional `isFullHeight` prop in `LoadingOrErrorWrapper` to set its height to 100%

## [0.1.32]
### Added
- English and Chinese translation for commonly used copies

## [0.1.31]
### Added
- Optional `isTooltipShownOnOverflowOnly` prop in `Tooltip` to control whether or not the tooltip should be displayed if there is no overflow
- Config to minimize build size by removing comments

## [0.1.30]
### Added
- `success` appearance and `dataQa` prop in `Button`
- `Badge` story

### Removed
- `qaProps` prop from `StyledRadio`

### Fixed
- Change `data-qa` to `data-qa-id` in `StyledRadio`

## [0.1.29]
### Fixed
- Only render `InlinePopover` in `ValidFieldText` if the value for `popoverContent` prop is set

## [0.1.28]
### Fixed
- `FieldLabel` style in `ValidFieldText`
- Hide warning icon in `ValidFieldTextArea` if `isInvalid` is `true`

## [0.1.27]
### Added
- `isRequired` prop in `FieldLabel`
- `isRequired` and `dataQa` props in `ValidFieldTextArea`
- `ValidFieldTextArea` story
- `qaProps` prop in `StyledRadio` to replace `dataQaProps`

### Fixed
- `ValidFieldTextArea`'s border didn't turn blue on focus

### Removed
- `tooltipRef` and `isInvalid` prop in `ValidFieldTextArea`

## [0.1.26]
### Added
- `html` prop is set to true to every `ReactTooltip` instance to enable using HTML as tooltip
- `type` prop in `InlinePopover` to support dark popover

### Refactored
- `message` prop in `FieldHelperText` is now able to receive a value with `ReactNode` type instead of `string` only

## [0.1.25]
### Added
- `dataQa` and `dataQaProps` props in `StyledRadio`

### Fixed
- Generate password button position in `ValidFieldPassword`
- Tooltip styling in `FieldLabel`, the implementation based on `styled-tooltip` class in the admin portal

### Refactored
- Update the strength level indicator in `ValidFieldPassword` to use `getDerivedStateFromProps` so it will smoothly update the state whenever the `strengthLevelIndicator` prop changes.

## [0.1.24]
### Added
- `ValidFieldPassword` component
- `ValidFieldText` story

### Fixed
- `InlinePopover` styling to have an arrow-like shape in its side based on its `placement` prop

### Refactored
- `dataQa` prop in `HorizontalSelect` also receive `null`
- Update `ValidFieldText` to match the one in current Admin Portal

## [0.1.23]
### Fixed
- App that uses this library previously has to manually import css file from it to make the styling works
- x icon styling in `Tag`
- URLs defined in css files were not encoded 

## [0.1.22]
### Added
- `dataQa` prop in `HorizontalSelect`
- Support for CSS modules on build


## [0.1.21]
### Fixed
- Sort indicator styling in `DynamicTable`
