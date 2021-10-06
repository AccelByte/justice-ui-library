# Justice UI Library
This library contains react component used in Admin Portal and Admin Portal Extension.

## Local Development

- Install required packages
    ```shell
    yarn install
    ```
- Run storybook
    ```shell
    yarn storybook
    ```

## When to add?
You need common component for both AP and AP Extension

## How to add?
### For a brand new component
- Add new component in src/components
- Add the story book as component documentation
- Upgrade justice-ui-library in AP/AP extension
### For an existing component in AP
- Copy component from AP to src/components
- Add the story book as component documentation
- Upgrade justice-ui-library in AP
- Refactor component import from AP to justice-ui-library
- Remove component in AP once all the component imported from justice-ui-library
