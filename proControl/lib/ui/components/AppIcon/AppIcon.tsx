import { Icon } from "@proControl/lib/ui/components"
import { Flex, Box } from "@proControl/lib/ui/layout"
import { AppIconProps } from "./types"

export const AppIcon = ({ onClick, title, icon, isDeactivated = false }: AppIconProps) => {
  return (
    <Flex g="$md" flxDirection="column" jc="center" ai="center">
      <Box
        s="100px"
        b={isDeactivated ? "1px solid $deactivated" : "1px solid $border"}
        shadow="$boxShadow"
        bg={isDeactivated ? "$gray600" : "$middleground"}
        r="$lg"
        p="$lg"
        onClick={() => {
          !isDeactivated && onClick && onClick()
        }}
      >
        <Icon name={icon} color={isDeactivated ? "$onDeactivated" : "$icon"} />
      </Box>
      <Flex
        w="100px"
        jc="center"
        fw="$semibold"
        fs="$md"
        c={isDeactivated ? "$onDeactivated" : "$text"}
        css={{ textAlign: "center" }}
      >
        {title}
      </Flex>
    </Flex>
  )
}
