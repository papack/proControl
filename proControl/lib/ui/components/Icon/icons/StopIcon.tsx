import { Svg, Path } from "@proControl/lib/ui/svg"

export const StopIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        d="M80 5H20C11.7125 5 5 11.7125 5 20V80C5 88.2875 11.7125 95 20 95H80C88.2875 95 95 88.2875 95 80V20C95 11.7125 88.2875 5 80 5ZM85 80C85 82.7625 82.7625 85 80 85H20C17.2375 85 15 82.7625 15 80V20C15 17.2375 17.2375 15 20 15H80C82.7625 15 85 17.2375 85 20V80Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
