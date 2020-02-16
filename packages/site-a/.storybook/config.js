import { addParameters, configure } from "@storybook/react";
import { themes } from "@storybook/theming";

addParameters({
  options: {
    theme: themes.light,
    showRoots: true,
  },
});

configure(() => {}, module);

