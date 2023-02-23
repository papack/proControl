import { useState, useEffect } from "react"

export const useLongPress = (callback = () => {}, ms = 300) => {
  const [startLongPress, setStartLongPress] = useState(false)

  useEffect(() => {
    let timerId
    if (startLongPress) {
      timerId = setTimeout(callback, ms)
    } else {
      clearTimeout(timerId)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [callback, ms, startLongPress])

  return {
    onPointerDown: () => setStartLongPress(true),
    onPointerUp: () => setStartLongPress(false),
    onPointerLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false)
  }
}
