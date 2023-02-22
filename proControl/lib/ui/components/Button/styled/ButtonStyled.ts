import { styled } from "@proControl/lib/ui/style/stitches.config"

export const ButtonStyled = styled("button", {
  fontFamily: "$body",
  display: "flex",
  alignItems: "center",
  outline: "none",
  padding: "$md",
  gap: "$md",
  borderStyle: "solid",
  borderRadius: "$md",

  variants: {
    panelSize: {
      normal: {
        fontSize: "$lg"
      },
      wide: {
        fontSize: "$md"
      }
    },

    size: {
      normal: {
        minHeight: "52px",
        fontWeight: "600",
        borderWidth: "2px"
      },
      small: {
        minHeight: "20px",
        borderWidth: "1px",
        fontSize: "$sm"
      }
    },

    onDarkBackground: {
      true: {},
      false: {}
    },

    variant: {
      primary: {
        cursor: "pointer"
      },
      secondary: {
        cursor: "pointer"
      },
      enabled: {
        cursor: "pointer"
      },
      deactivated: {
        cursor: "not-allowed"
      }
    }
  },

  compoundVariants: [
    {
      variant: "primary",
      onDarkBackground: false,
      css: {
        backgroundColor: "$primary",
        borderColor: "$primary",
        color: "$onPrimary"
      }
    },
    {
      variant: "secondary",
      onDarkBackground: false,
      css: {
        backgroundColor: "transparent",
        borderColor: "$borderOnLight",
        color: "$onSecondary"
      }
    },
    {
      variant: "enabled",
      onDarkBackground: false,
      css: {
        backgroundColor: "$enabled",
        borderColor: "$enabled",
        color: "$onEnabled"
      }
    },
    {
      variant: "deactivated",
      onDarkBackground: false,
      css: {
        backgroundColor: "$deactivated",
        borderColor: "$deactivated",
        color: "$onDeactivated"
      }
    },
    {
      variant: "primary",
      onDarkBackground: true,
      css: {
        backgroundColor: "$primary",
        borderColor: "$primary",
        color: "white"
      }
    },
    {
      variant: "secondary",
      onDarkBackground: true,
      css: {
        backgroundColor: "transparent",
        borderColor: "$gray400",
        color: "$light"
      }
    },
    {
      variant: "enabled",
      onDarkBackground: true,
      css: {
        backgroundColor: "$onDark",
        borderColor: "$borderOnDark",
        color: "$onLight"
      }
    },
    {
      variant: "deactivated",
      onDarkBackground: true,
      css: {
        backgroundColor: "$deactivated",
        borderColor: "$deactivated",
        color: "$onDeactivated"
      }
    }
  ]
})
