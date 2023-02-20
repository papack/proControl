import { useAnimation } from "framer-motion"
import { useEffect, useRef, useCallback } from "react"
import { useDesktop } from "./useDesktop"
import { Box } from "@proControl/lib/ui/layout"
import { Div } from "@proControl/lib/ui/html"
import { calculateDesktopOffset } from "./utils"
import { onDragEndHandler } from "./handler"
import { DesktopSwitcherProps } from "./interfaces"
import { motion } from "framer-motion"

export const DesktopSwitcher = ({ children }: DesktopSwitcherProps) => {
  //hooks
  const {
    currentDesktop,
    setCurrentDesktop,
    numberOfDesktops,
    setNumberOfDesktops,
    desktopWidth,
    setDesktopWidth
  } = useDesktop()
  const animation = useAnimation()

  //set the number of desktops if it is not set
  if (numberOfDesktops !== children?.length) {
    setNumberOfDesktops(children?.length)
  }

  //get the current wrapper element/ we need this to calculate the width of the desktop
  const wrapperEl = useRef<HTMLDivElement>(null)

  //wait for the wrapper to be rendered
  useEffect(() => {
    //set the width of the desktop
    setDesktopWidth(wrapperEl.current?.clientWidth || 0)

    //function to handle the window resize
    const resizeHandler = () => {
      setDesktopWidth(wrapperEl.current?.clientWidth || 0)
    }

    //handle resizing of the window
    window.addEventListener("resize", resizeHandler)

    //remove resizeHandler to prevent unpredictable behavior
    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [wrapperEl, setDesktopWidth])

  //funktion to set positon to the current desktop
  const moveToDesktop = useCallback(
    (currentDesktop: number, desktopWidth: number) => {
      animation.start({
        x: calculateDesktopOffset({
          desktopWidth,
          currentDesktop
        })
      })
    },
    [animation]
  )

  //recalcalulate xpos, if the screen is resized or Desktop changed
  useEffect(() => {
    moveToDesktop(currentDesktop, desktopWidth)
  }, [desktopWidth, currentDesktop, moveToDesktop])

  return (
    <Box s="100%" css={{ overflow: "hidden" }}>
      <motion.div
        drag={"x"}
        initial={{
          x: calculateDesktopOffset({ desktopWidth, currentDesktop })
        }}
        animate={animation}
        dragConstraints={{
          left: desktopWidth * (numberOfDesktops - 1) * -1,
          right: 0
        }}
        dragMomentum={false}
        transition={{ type: "spring", stiffness: 500, damping: 50, mass: 0.1 }}
        onDragEnd={(_, { offset: { x } }) => {
          onDragEndHandler({
            moveToDesktop,
            currentDesktop,
            desktopWidth,
            numberOfDesktops,
            setCurrentDesktop,
            xOffset: x
          })
        }}
        style={{
          touchAction: "none",
          width: "100%",
          height: "100%"
        }}
      >
        {/* DesktopWrapper is needet to calculate the sizes */}
        <Div css={{ display: "flex", width: "100%", height: "100%" }} ref={wrapperEl}>
          {children}
        </Div>
      </motion.div>
    </Box>
  )
}
