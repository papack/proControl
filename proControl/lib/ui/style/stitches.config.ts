import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    radii: {
      //components
      innput: "$md",
      button: "$md",
      container: "$md",

      //base
      sm: "2px",
      md: "4px",
      lg: "8px",
      xl: "16px",
    },

    fonts: {
      body: "sans-serif",
      heading1: "serif",
      heading2: "serif",
      heading3: "serif",
      heading4: "serif",
      heading5: "serif",
      heading6: "serif",
    },

    fontWeights: {
      //text
      heading: "bold",
      body: "$normal",

      //base
      thin: "100",
      ultralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    zIndices: {
      default: "100",
      notification: "200",
      blur: "300",
      modal: "400",
    },

    fontSizes: {
      //text
      heading1: "$5xl",
      heading2: "$4xl",
      heading3: "$3xl",
      heading4: "$2xl",
      heading5: "$xl",
      heading6: "$lg",
      body: "$md",
      caption: "$sm",

      //base
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: "2rem",
      "2xl": "2.4rem",
      "3xl": "3.2rem",
      "4xl": "4rem",
      "5xl": "4.8rem",
      "6xl": "5.6rem",
      "7xl": "6.4rem",
      "8xl": "7.2rem",
      "9xl": "8rem",
    },

    lineHeights: {
      //text
      heading: "1.2",
      body: "1.5",

      //base
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    shadows: {
      //box shadow
      container: "$md",

      //base
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },

    sizes: {
      //button
      buttonSmall: "$sm",
      buttonMedium: "$md",
      buttonLarge: "$lg",

      //input
      inputSmall: "$sm",
      inputMedium: "$md",
      inputLarge: "$lg",

      //base
      sm: "2.0rem",
      md: "4.0rem",
      lg: "6.0rem",
      xl: "8.0rem",
      "2xl": "10.0rem",
      "3xl": "12.0rem",
      "4xl": "14.0rem",
      "5xl": "16.0rem",
      "6xl": "18.0rem",
      "7xl": "20.0rem",
      "8xl": "22.0rem",
      "9xl": "24.0rem",
    },

    space: {
      //base
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "3.5rem",
      "5xl": "4rem",
      "6xl": "4.5rem",
      "7xl": "5rem",
      "8xl": "5.5rem",
      "9xl": "6rem",
    },

    colors: {
      //
      // Colors
      //

      //text
      heading: "$black",
      body: "$black",
      headingInverted: "$white",
      bodyInverted: "$white",

      //background
      background: "$gray300",
      foreground: "white",

      //border
      borderPrimary: "$primary",
      borderSecondary: "$secondary",
      borderSuccess: "$success",
      borderWarning: "$warning",
      borderDanger: "$danger",
      borderInformation: "$information",
      borderDisabled: "$disabled",
      borderLight: "$white",
      borderDark: "$black",
      borderContainer: "$gray300",

      //border inverse
      borderPrimaryInverted: "$onPrimary",
      borderSecondaryInverted: "$onSecondary",
      borderSuccessInverted: "$onSuccess",
      borderWarningInverted: "$onWarning",
      borderDangerInverted: "$onDanger",
      borderInformationInverted: "$onInformation",
      borderDisabledInverted: "$onDisabled",
      borderLightInverted: "$onLight",
      borderDarkInverted: "$onDark",

      //Main colors
      primary: "$blue900",
      secondary: "$blue800",
      success: "$green900",
      warning: "$yellow900",
      danger: "$red900",
      information: "$blue500",
      disabled: "$gray200",
      light: "$gray100",
      dark: "$gray900",

      //primaryActive
      primaryActive: "$blue800",
      secondaryActive: "$blue700",
      successActive: "$green800",
      warningActive: "$yellow800",
      dangerActive: "$red800",
      informationActive: "$blue600",
      disabledActive: "$disabled",
      lightActive: "$gray200",
      darkActive: "$gray800",

      //primaryHover
      primaryHover: "$blue700",
      secondaryHover: "$blue600",
      successHover: "$green700",
      warningHover: "$yellow700",
      dangerHover: "$red700",
      informationHover: "$blue700",
      disabledHover: "$disabled",
      lightHover: "$gray300",
      darkHover: "$gray700",

      //main contrast colors
      onPrimary: "$white",
      onSecondary: "$white",
      onSuccess: "$white",
      onWarning: "$white",
      onDanger: "$white",
      onInformation: "$white",
      onDisabled: "$gray400",
      onLight: "$black",
      onDark: "$white",

      //black and white
      black: "$gray900",
      white: "$gray000",

      //
      // Base Colors
      //

      //Gray
      gray000: "#f8f9fa",
      gray100: "#f1f3f5",
      gray200: "#e9ecef",
      gray300: "#dee2e6",
      gray400: "#ced4da",
      gray500: "#adb5bd",
      gray600: "#868e96",
      gray700: "#495057",
      gray800: "#343a40",
      gray900: "#212529",

      //Red
      red000: "#fff5f5",
      red100: "#ffe3e3",
      red200: "#ffc9c9",
      red300: "#ffa8a8",
      red400: "#ff8787",
      red500: "#ff6b6b",
      red600: "#fa5252",
      red700: "#f03e3e",
      red800: "#e03131",
      red900: "#c92a2a",

      //Pink
      pink000: "#fff0f6",
      pink100: "#ffdeeb",
      pink200: "#fcc2d7",
      pink300: "#faa2c1",
      pink400: "#f783ac",
      pink500: "#f06595",
      pink600: "#e64980",
      pink700: "#d6336c",
      pink800: "#c2255c",
      pink900: "#a61e4d",

      //Grape
      grape000: "#f8f0fc",
      grape100: "#f3d9fa",
      grape200: "#eebefa",
      grape300: "#e599f7",
      grape400: "#da77f2",
      grape500: "#cc5de8",
      grape600: "#be4bdb",
      grape700: "#ae3ec9",
      grape800: "#9c36b5",
      grape900: "#862e9c",

      //Violet
      violet000: "#f3f0ff",
      violet100: "#e5dbff",
      violet200: "#d0bfff",
      violet300: "#b197fc",
      violet400: "#9775fa",
      violet500: "#845ef7",
      violet600: "#7950f2",
      violet700: "#7048e8",
      violet800: "#6741d9",
      violet900: "#5f3dc4",

      //Indigo
      indigo000: "#edf2ff",
      indigo100: "#dbe4ff",
      indigo200: "#bac8ff",
      indigo300: "#91a7ff",
      indigo400: "#748ffc",
      indigo500: "#5c7cfa",
      indigo600: "#4c6ef5",
      indigo700: "#4263eb",
      indigo800: "#3b5bdb",
      indigo900: "#364fc7",

      //Blue
      blue000: "#e7f5ff",
      blue100: "#d0ebff",
      blue200: "#a5d8ff",
      blue300: "#74c0fc",
      blue400: "#4dabf7",
      blue500: "#339af0",
      blue600: "#228be6",
      blue700: "#1c7ed6",
      blue800: "#1971c2",
      blue900: "#1864ab",

      //Cyan
      cyan000: "#e3fafc",
      cyan100: "#c5f6fa",
      cyan200: "#99e9f2",
      cyan300: "#66d9e8",
      cyan400: "#3bc9db",
      cyan500: "#22b8cf",
      cyan600: "#15aabf",
      cyan700: "#1098ad",
      cyan800: "#0c8599",
      cyan900: "#0b7285",

      //Teal
      teal000: "#e6fcf5",
      teal100: "#c3fae8",
      teal200: "#96f2d7",
      teal300: "#63e6be",
      teal400: "#38d9a9",
      teal500: "#20c997",
      teal600: "#12b886",
      teal700: "#0ca678",
      teal800: "#099268",
      teal900: "#087f5b",

      //Green
      green000: "#ebfbee",
      green100: "#d3f9d8",
      green200: "#b2f2bb",
      green300: "#8ce99a",
      green400: "#69db7c",
      green500: "#51cf66",
      green600: "#40c057",
      green700: "#37b24d",
      green800: "#2f9e44",
      green900: "#2b8a3e",

      //Lime
      lime000: "#f4fce3",
      lime100: "#e9fac8",
      lime200: "#d8f5a2",
      lime300: "#c0eb75",
      lime400: "#a9e34b",
      lime500: "#94d82d",
      lime600: "#82c91e",
      lime700: "#74b816",
      lime800: "#66a80f",
      lime900: "#5c940d",

      //Yellow
      yellow000: "#fff9db",
      yellow100: "#fff3bf",
      yellow200: "#ffec99",
      yellow300: "#ffe066",
      yellow400: "#ffd43b",
      yellow500: "#fcc419",
      yellow600: "#fab005",
      yellow700: "#f59f00",
      yellow800: "#f08c00",
      yellow900: "#e67700",

      //Orange
      orange000: "#fff4e6",
      orange100: "#ffe8cc",
      orange200: "#ffd8a8",
      orange300: "#ffc078",
      orange400: "#ffa94d",
      orange500: "#ff922b",
      orange600: "#fd7e14",
      orange700: "#f76707",
      orange800: "#e8590c",
      orange900: "#d9480f",

      //Brown
      brown000: "#fff5eb",
      brown100: "#ffe8d6",
      brown200: "#ffd7ba",
      brown300: "#ffc39e",
      brown400: "#ffa94d",
      brown500: "#ff922b",
      brown600: "#fd7e14",
      brown700: "#f76707",
      brown800: "#e8590c",
      brown900: "#d9480f",

      //light
      light000: "#f8f9fa",
      light100: "#f1f3f5",
      light200: "#e9ecef",
      light300: "#dee2e6",
      light400: "#ced4da",
      light500: "#adb5bd",
      light600: "#868e96",
      light700: "#495057",
      light800: "#343a40",
      light900: "#212529",

      //dark
      dark000: "#212529",
      dark100: "#343a40",
      dark200: "#495057",
      dark300: "#868e96",
      dark400: "#adb5bd",
      dark500: "#ced4da",
      dark600: "#dee2e6",
      dark700: "#e9ecef",
      dark800: "#f1f3f5",
      dark900: "#f8f9fa",
    },
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    fontSize: "62.5%",
  },
  body: {
    fontSize: "$body",
    fontFamily: "$body",
    color: "$body",
    backgroundColor: "$background",
  },
  h1: {
    fontSize: "$heading1",
    fontFamily: "$heading1",
  },
  h2: {
    fontSize: "$heading2",
    fontFamily: "$heading2",
  },
  h3: {
    fontSize: "$heading3",
    fontFamily: "$heading3",
  },
  h4: {
    fontSize: "$heading4",
    fontFamily: "$heading4",
  },
  h5: {
    fontSize: "$heading5",
    fontFamily: "$heading5",
  },
  h6: {
    fontSize: "$heading6",
    fontFamily: "$heading6",
  },
});
