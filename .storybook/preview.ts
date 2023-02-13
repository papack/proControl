export const parameters = {
  backgrounds: {
    default: "light"
  },
  actions: { argTypesRegex: "^on[A-Z].*" },

  layout: "centered",

  options: {
    storySort: {
      order: ["lib"] //set the order of the storys
    }
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
