/* eslint-disable */
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export function getBaseTheme(options?: ThemeOptions) {
  let mergedTheme = createMuiTheme(options);
  mergedTheme = responsiveFontSizes(mergedTheme);

  const req = require.context("./components", true, /.js$/);
  let overrides = {};

  req.keys().forEach(filename => {
    overrides = {
      ...overrides,
      ...req(filename).default(mergedTheme),
    };
  });

  mergedTheme.overrides = overrides;
  return mergedTheme;
}
