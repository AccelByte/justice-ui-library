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

## How to commit?
Currently we have two GitHub actions that will automatically create a new tag and a new release everytime a commit is merged to master branch. 
Things you should pay attention to before merging your work to master branch :
- Make sure to update `CHANGELOG.md` to keep track on what's updated in the repo
- Run `yarn build` at least once and include the changed files in your last commit before merge
- Any 3rd party packages included in the build file will be based on their installed version in your local. Make sure your installed packages are up to date to avoid unexpected behavior AP due to different version between your local and package.json.
- If you want to update the minor version, add `#minor` at the end of your commit message (ex: `feat(some_component): some message #minor`)
- The same goes if you want to update the major or patch version, add `#major` or `#patch` at the end of your commit message
- If you don't add one of those three to your commit message, the Github action will not add a new tag

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

## Where are the published storybooks?
Our storybooks are puslished using github page, the homepage is:
https://accelbyte.github.io/justice-ui-library/