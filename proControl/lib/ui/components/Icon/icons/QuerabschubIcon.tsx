import { Svg, Path, Rect, Circle } from "@proControl/lib/ui/svg"

export const QuerabschubIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="16" y="67" width="41" height="9" rx="2" css={{ fill: color }} />
      <Rect x="32" y="40" width="10" height="29" rx="2" css={{ fill: color }} />
      <Rect x="32" y="37" width="10" height="32" rx="2" css={{ fill: color }} />
      <Rect
        x="39.7803"
        y="43.8135"
        width="10"
        height="39.2336"
        rx="2"
        transform="rotate(-135 39.7803 43.8135)"
        css={{ fill: color }}
      />
      <Circle cx="36" cy="39" r="4" css={{ fill: color }} />
      <Rect x="48" y="50" width="34" height="7" css={{ fill: color }} />
      <Rect
        x="75"
        y="85"
        width="34"
        height="7"
        transform="rotate(-90 75 85)"
        css={{ fill: color }}
      />
      <Path
        d="M79.2963 93.9518C78.8961 94.4786 78.1039 94.4786 77.7037 93.9518L68.8939 82.3549C68.3937 81.6965 68.8633 80.75 69.6902 80.75H87.3098C88.1367 80.75 88.6063 81.6965 88.1061 82.3549L79.2963 93.9518Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
