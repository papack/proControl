import { Icon } from "@proControl/lib/ui/components"
import { Box, Flex } from "@proControl/lib/ui/layout"
import { CheckProps } from "./types"

export const Check = ({
  checked = false,
  lable = "",
  onClick = () => {},
  disabled = false,
  gap = "$md",
  onClickDisabled = () => {},
  variant = "check"
}: CheckProps) => {
  return (
    <Flex
      g={gap}
      onClick={(e) => {
        disabled ? onClickDisabled(e) : onClick(e)
      }}
    >
      {/** Checkbox */}
      <Box
        s="24px"
        r={variant === "radio" ? "9999px" : "$md"}
        p={variant === "radio" ? "2px" : "1px"}
        css={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: disabled ? "$gray600" : "black"
        }}
      >
        {checked && (
          <Icon
            name={variant === "check" ? "haken" : "circle"}
            color={disabled ? "$gray600" : "$christ"}
          />
        )}
      </Box>

      {/** text */}
      <Box c={disabled ? "$gray700" : undefined} pt="2px">
        {lable}
      </Box>
    </Flex>
  )
}
