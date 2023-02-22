import { Box, Flex, Center } from "@proControl/lib/ui/layout"
import { Icon } from "@proControl/lib/ui/components"
import { ButtonProps } from "./types"
import { ButtonStyled } from "./styled"

export const Button = ({
  iconName,
  iconColor,
  isOnDarkBackground = false,
  onClick = () => {},
  onClickDeactivated = () => {},
  panelSize,
  title,
  variant = "secondary",
  size = "normal",
  disableFocusRequest,
  fullHeight = false,
  fullWidth = false,
  show = true,
  minW,
  onPointerDown = () => {},
  onPointerUp = () => {}
}: ButtonProps) => {
  //show
  if (!show) return null

  return (
    <ButtonStyled
      panelSize={panelSize}
      onDarkBackground={isOnDarkBackground}
      size={size}
      variant={variant}
      css={{
        height: fullHeight ? "100%" : "auto",
        width: fullWidth ? "100%" : "auto"
      }}
      onMouseDown={(e) => {
        if (disableFocusRequest) {
          e.preventDefault()
          e.stopPropagation()
        }
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        variant === "deactivated" ? onClickDeactivated() : onClick()
      }}
    >
      {/** Button Content*/}
      <Flex jc="center" ai="center" w="100%" g={!minW ? "$md" : undefined}>
        {/** icon */}
        {iconName && (
          <Box
            s={size === "normal" ? "30px" : "20px"}
            minH={size === "normal" ? "30px" : "20px"}
            minW={size === "normal" ? "30px" : "20px"}
          >
            <Icon name={iconName} color={iconColor ? iconColor : undefined} />
          </Box>
        )}

        {/**  Text */}
        {title && (
          <Center h="100%" minW={minW}>
            {title}
          </Center>
        )}
      </Flex>
    </ButtonStyled>
  )
}
