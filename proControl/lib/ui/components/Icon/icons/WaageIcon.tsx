import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const WaageIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="20" y="12" width="61" height="7" rx="3.5" css={{ fill: color }} />
      <Rect x="49" y="17" width="3" height="65" css={{ fill: color }} />
      <Rect x="39" y="81" width="22" height="10" css={{ fill: color }} />
      <Path
        d="M8 41C8 46.0391 9.84374 50.8718 13.1256 54.435C16.4075 57.9982 20.8587 60 25.5 60C30.1413 60 34.5925 57.9982 37.8744 54.435C41.1563 50.8718 43 46.0391 43 41L25.5 41L8 41Z"
        css={{ fill: color }}
      />
      <Path
        d="M58 41C58 46.0391 59.8437 50.8718 63.1256 54.435C66.4075 57.9982 70.8587 60 75.5 60C80.1413 60 84.5925 57.9982 87.8744 54.435C91.1563 50.8718 93 46.0391 93 41L75.5 41L58 41Z"
        css={{ fill: color }}
      />
      <Rect
        x="8"
        y="43.3745"
        width="32"
        height="3.52661"
        transform="rotate(-58.8099 8 43.3745)"
        css={{ fill: color }}
      />
      <Rect
        x="58"
        y="43.3745"
        width="32"
        height="3.52661"
        transform="rotate(-58.8099 58 43.3745)"
        css={{ fill: color }}
      />
      <Rect
        x="76.0168"
        y="15"
        width="32"
        height="3.52661"
        transform="rotate(58.81 76.0168 15)"
        css={{ fill: color }}
      />
      <Rect
        x="26.0168"
        y="16"
        width="32"
        height="3.52661"
        transform="rotate(58.81 26.0168 16)"
        css={{ fill: color }}
      />
    </Svg>
  )
}
