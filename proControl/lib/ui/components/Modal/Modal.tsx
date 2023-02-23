import { WindowFrame } from "@proControl/lib/ui/components"
import { Fixed, Center, Relative, Absolute, Box } from "@proControl/lib/ui/layout"
import { ModalProps } from "./types"

export const Modal = ({
  children,
  show,
  onClose,
  title,
  zIndex = "$modal",
  moveToBottomRight = false,
  bg
}: ModalProps) => {
  if (!show) return null

  return (
    <Fixed
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClose()
      }}
      css={{
        zIndex
      }}
    >
      {/** Center */}
      {!moveToBottomRight ? (
        <Center h="100%">
          <Box
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            {/**Frame */}
            <WindowFrame bg={bg} title={title} onClose={onClose}>
              {children}
            </WindowFrame>
          </Box>
        </Center>
      ) : (
        /** Pos Button right */
        <Relative h="100%">
          {/**Box to stop Propagation  */}
          <Absolute
            right="18px"
            bottom="18px"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
            }}
          >
            {/**Frame */}
            <WindowFrame title={title} onClose={onClose}>
              {children}
            </WindowFrame>
          </Absolute>
        </Relative>
      )}
    </Fixed>
  )
}
