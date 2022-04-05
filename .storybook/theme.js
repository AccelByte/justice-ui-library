import { create } from '@storybook/theming';
import headerLogoSvg from "../src/assets/headerLogo.svg"

export default create({
  base: 'light',
  brandTitle: 'AccelByte - Justice UI Library',
  brandUrl: 'https://github.com/AccelByte/justice-ui-library',
  brandImage: headerLogoSvg,
});