/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/Intro.stories.mdx", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ["../public"],
  features: {
    interactionsDebugger: true,
  },
};
export default config;
