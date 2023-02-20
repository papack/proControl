import { Icon } from "@proControl/lib/ui/components"
import { Box } from "@proControl/lib/ui/layout"
import { ToolbarIconProps } from "./interfaces"

export const ToolbarIcon = ({ iconName, iconColor, border = false, variant }: ToolbarIconProps) => {
  return (
    <Box
      bg={variant === "enabled" ? "$light" : undefined}
      s="60px"
      b={border === true ? "2px solid $borderOnDark" : undefined}
      p="$md"
      r="$lg"
      css={{ cursor: "pointer" }}
    >
      <Icon
        name={iconName}
        color={
          iconColor
            ? iconColor // iconColor if we have one
            : variant === "enabled"
            ? "$dark" // dark on enalbed
            : variant === "deactivated"
            ? "$gray800" //gray 800 on deaktivated
            : "$light" //light on primary
        }
      />
    </Box>
  )
}
