import type { StorybookConfig } from "@storybook/react-vite"
import path from "path"
import { mergeConfig } from "vite"

const config: StorybookConfig = {
  stories: ["../proControl/**/*.mdx", "../proControl/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
        alias: { "@proControl": path.resolve(__dirname, "../proControl") }
      }
    })
  }
}
export default config
