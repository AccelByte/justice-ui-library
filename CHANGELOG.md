# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.13.2]
### Added
- `minWidth` prop in `DynamicTable`

### Fixed
- Prevent typing more than one `.` in `ValidFieldText` if `type` is `float`

## [0.13.1]
### Fixed
- Component path in storybook

## [0.13.0]
### Refactored
- Refactor index files with respective names

## [0.12.0]
### Added
- Add tooltip if option label in `Select` overflows

### Refactored
- Set text color in input components default to `$base-120` and `$base-60` when they are disabled

## [0.11.10]
### Refactored
- Change type `tel` to `float` in `type` prop of `ValidFieldText`
- make `children` prop to be optional in `ButtonWithIcon` component

## [0.11.9]
### Refactored
- Add `tel` as a possible value for `type` prop in `ValidFieldText`

## [0.11.8]
### Fixed
- styling on disabled option(s) in `ValidSelect`

### Added
- Support `shouldFitContainer` in `Tooltip`

## [0.11.7]
### Added
- Support `buttonAppearance` with `outline` in `ButtonDropdown`
- English & Chinese translation for `noOptionsMessage` in `Select` and `ValidSelectAsync`
- `label` and `tooltip` props in `DateTimePicker`
- `className` prop in `FieldLabel`

### Refactored
- Increase `Tooltip`'s z-index

### Fixed
- Text color in `DateTimePicker`
- Row height in `DynamicTable`
- Font size of `EmptyResultsWithIcon`'s title
- Text color of `EmptyResultsWithIcon`'s description
- Text color and font size in `NoResultTip`
- Placeholder color in text input components

## [0.11.6]
### Added
- English & Chinese translation for `no result` in `SelectWithLogo` component
- Font-family for `SelectWithLogo` component

## [0.11.5]
### Added
- default value for `dataQa` in `FieldErrorMessage`

## [0.11.4]
### Added
- Custom `MultiValueLabel` component in `Select` to support unremovable options

## [0.11.3]
### Added
- default value for `prevDataQa` and `nextDataQa` in `Pagination`

## [0.11.2]
### Added
- `dataQa` prop in `Badge`
- `dataQaProps` and `className` prop in `Checkbox`

### Refactored
- Move `data-qa-id` to `accordionToggler` element in `Accordion`

## [0.11.1]
### Fixed
- fix `SelectWithLogo` `dataQa` and `dataQaProps` types

## [0.11.0]
### Added
- component `SelectWithLogo`
- component `SelectAsync`

## [0.10.5]
### Added
- `dataQa` and `dataQaProps` in `TableFilter`

## [0.10.4]
### Added
- `dataQaProps` for options in `StyledRadioTabVertical`

## [0.10.3]
### Added
- styling for right icon props in valid field text


## [0.10.2]
### Fixed
- Apply `styled-atlaskit-button` style when `Button` is rendered as an `a` tag

## [0.10.1]
### Fixed
- limit click area in the `Checkbox` component to follow the content width


## [0.10.0]
### Fixed
- adding `dataQa` and `dataQaProps` for password strength component

## [0.9.5]
### Added
- `className` prop in `TableFilter`
- `menuPortalTarget` prop in `TableFilter` and `CheckboxSelect`

### Refactored
- `DropdownIndicator` component in `Select`-based components

### Fixed
- Recalculate password strength when `hasPasswordStrengthMeter` prop changes in `ValidFieldPassword`

## [0.9.4]
### Added
- Enable adding `data-qa-id` to more button and tabs inside dropdown in `NavigationTab`

## [0.9.3]
### Added
- fix component `ValidFieldPassword` Fix password strength checker doesn't run correctly when the password is pasted or autofilled

## [0.9.2]
### Added
- fix component `ValidFieldPassword` not yet build yet.

## [0.9.1]
### Added
- set `zxcvbnOption` as props for `ValidFieldPassword` and remove `passwordGraph.json` and `unsafePassword.json`
- add `overflowXAuto`  props for `Card`

## [0.9.0]
### Added
- add password strength meter at `ValidFieldPassword`, add props `hasPasswordStrenghtMeter` to show password strength meter

## [0.8.5]
### Added
- Fix `overflow-y:auto` in `card-content` to avoid spill out

## [0.8.4]
### Added
- `dataQa` and `dataQaProps` props in `Button`, `Select`, `ValidDynamicText`, and `ValidSelect`

## [0.8.3]
###
- Fix text type on `BadgeProps` to ReactNode

## [0.8.2]
### Changed
- Change `Badge` color when `StyledToggle` is not checked from `ERROR` to `INACTIVE`

### Fixed
- `box-sizing` of `StyledRadio` is set to `border-box` to fix styling in storybook
- Fix trash icon in `ValidDynamicText` is partially hidden

## [0.8.1]
### Fixed
- Fix style toggle if toggle is disabled

## [0.8.0]
### Refactored
- Remove prop html from react-tooltip instances
- Sanitize all `data-tip` instances with DOMPurify and add `data-html`. [Reference](https://github.com/wwayne/react-tooltip#security-note)

## [0.7.4]
### Fixed
- Fix error message style for ValidFieldTextArea

## [0.7.3]
### Added
- `position` prop in tooltip compononent, determines where the tooltip will be display
- `isPositionFixed` prop will set styling for tooltip  to `position:fixed` and determine top and left coordinate using javascript

## [0.7.2]
### Fixed
- Fix scss that's imported more than once is not injected to the DOM

## [0.7.1]
### Fixed
- Fix `fa-icon-`s are missing in production

## [0.7.0]
### Added
- `yarn build` results in multiple outputs for each component instead of one single huge file

### Refactored
- Import fa_icons.css in all components using `fa-icon`

## [0.6.5]
### Refactored
- Remove `styled-atlaskit`, `Form`, `Loading`, `Navigation`, `Page`, and `Wrapper` folder and move its components up by one level

## [0.6.4]
### Fixed
- Label and input font size in `ValidatedInput`
- Multi value label background color of `Select` components
- Margin bottom of `Tag`

## [0.6.3]
### Refactored
- `ValidSelect` allow array of SelectOption as onChange argument type

## [0.6.2]
### Fixed
- `DynamicTable`, `Select` and `Pagination` Fix font styling

## [0.6.1]
### Refactored
- `ValidSelect` remove creatable props

### Added
- `ValidCreatableSelect` component

## [0.6.0]
### Added
- `ValidSelect` add creatable props

## [0.5.1]
### Fixed
- `Pagination` fix display styling

## [0.5.0]
### Added
- `Pagination` add limit option props

## [0.4.13]
### Refactored
- Change `div` to `p` in `addLineBreaks`

## [0.4.12]
### Fixed
- `DynamicTable` fix font-size in .action-wrap

## [0.4.11]
### Refactored
- Change `image` type for `ErrorWrapper` to `ReactNode`

## [0.4.10]
### Fixed
- `Breadcrumb` Fix font color and size

## [0.4.9]
### Fixed
- Fix styling for DynamicTable, Button, Checkbox, FieldHelperText

## [0.4.8]
### Added
- `dataQaProps` and `id` in `NavigationTab`'s `config`
- `noPadding` props in `NavigationTab`
- Export `ModalFooter` and `ModalHeader` from `@atlaskit/modal-dialog`
- `withAction` prop in `Modal`

## [0.4.7]
### Removed
- Vertical icon styling issue in the header `card` component

## [0.4.6]
### Added
- `subtitle` prop in `ProgressModalPage`

### Fixed
- Styling issues in `CheckboxSelect` when `isValueHidden` prop is set to `true`
- Styling some states of the button

### Refactored
- Give `label` element in `Checkbox` and `StyledToggle` a classname to override `.styled-atlaskit-form label` in local dev
- Icons synchronization with the Figma design

## [0.4.5]
### Fixed
- Select helperText type and styling

## [0.4.4]
### Fixed
- Select disabled background color

## [0.4.3]
### Added
- New color palettes according to master component

### Refactored
- Adjust `Button` styling according to the design
- Change the imported font family url

## [0.4.2]
### Added
- `ValidSelectAsync` add `helperText` props

## [0.4.1]
### Added
- `ValidSelect` add `helperText` props

## [0.4.0]
### Added
- `DynamicTable` add pagination props

## [0.3.1]
### Refactored
- Change the style of selected options in `ValidSelect` with multiple options, the background color changed to blue (`$brand-100`) and the text color to white

### Added
- `onClick` prop for `Checkbox` component

## [0.3.0]
### Added
- `DropdownItemGroup` and `DropdownItem` stories
- Explanation of complex some prop types. For example, `SelectOption` is an object containing `{ label: string; value: string }`
- `CheckboxSelect` component

### Refactored
- Some prop descriptions in `Accordion` and `Banner`
- Decrease the number of extended props from `InputHTMLAttributes<HTMLInputElement>` in `ValidFieldText` to only `maxLength`, `placeholder`, `disabled`, `onBlur`, and `className`
- Make `ValidDynamicText` story more interactive
- Deprecate `RadioButton` and `InlineCheckboxField` components

### Removed
- `onFocus` and `onBlur` props from `StyledToggle`
- Unused feather icons
- Icon font formats other than `.woff`
- `datetime` from `utils` folder
- `type` prop from `ValidFieldPassword` and `PureSearchPanel`
- `rightIcon` and `isFloat` prop from `ValidFieldPassword`

## [0.2.5]
### Added
- Adding the `ButtonDropdown` component

## [0.2.4]
### Fixed
- Implement scrollbar styling to `Select`

## [0.2.3]
### Fixed
- `ValidSelect` missing props from `Select`

## [0.2.2]
### Added
- `isToggleDisabled` prop in `Accordion` to disable `toggleAccordion` function

### Refactored
- Disable keydown input for `DateTimePicker`

## [0.2.1]
### Fixed
- `ValidSelectAsync` add scrollbar styling and data-qa-id attribute

## [0.2.0]
### Added
- `ValidSelectAsync` component

## [0.1.43]
### Added
- `noPadding` and `noMarginBottom` props in `Page` component
- `noPadding` props in `Accordion` component
- `react-docgen-typescript`

### Refactored
- `Accordion` styling

### Removed
- Duplicate `styled-atlaskit-table` css in `Card`

### Fixed
- `DynamicTable` row max width is shrinked to 320px on drag

## [0.1.42]
### Refactored
- Sort storybook alphabetically
- `placeholder` prop in `ValidSelect` and `ValidMultiSelect` is made optional
- Initialize storybook docs

### Added
- UI in `Button` when `appearance` is `subtle` and `className` is `danger`
- Focus, blur, click, close handler in `InlinePopover`

## [0.1.41]
### Added
- `tooltip` prop in `TableFilter` and `NoResultTip` components

## [0.1.40]
### Added
- `StyledToggle` component
- `noPadding` prop in `DynamicTable` to conditionally add `no-padding` class
- More icons for `accelicons` font and sorted them based on figma design

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