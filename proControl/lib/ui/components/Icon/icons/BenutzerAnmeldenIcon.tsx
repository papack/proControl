import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const BenutzerAnmeldenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M34 13C34 9.13401 37.134 6 41 6V6V40H34V13Z" css={{ fill: color }} />
      <Path d="M34 63H41V94V94C37.134 94 34 90.866 34 87V63Z" css={{ fill: color }} />
      <Path
        d="M90 6V6C93.866 6 97 9.13401 97 13V87C97 90.866 93.866 94 90 94V94V6Z"
        css={{ fill: color }}
      />
      <Path
        d="M34 13C34 9.13401 37.134 6 41 6H90C93.866 6 97 9.13401 97 13V13H34V13Z"
        css={{ fill: color }}
      />
      <Path
        d="M34 87H97V87C97 90.866 93.866 94 90 94H41C37.134 94 34 90.866 34 87V87Z"
        css={{ fill: color }}
      />
      <Rect
        x="54"
        y="60"
        width="38"
        height="17"
        rx="2"
        transform="rotate(-180 54 60)"
        css={{ fill: color }}
      />
      <Path d="M76 51.5L51.25 70.9856L51.25 32.0144L76 51.5Z" css={{ fill: color }} />
    </Svg>
  )
}
