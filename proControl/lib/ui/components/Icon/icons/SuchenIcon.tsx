import { Svg, Path } from "@proControl/lib/ui/svg"

export const SuchenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.1735 64.347C55.2856 64.347 68.347 51.2856 68.347 35.1735C68.347 19.0614 55.2856 6 39.1735 6C23.0614 6 10 19.0614 10 35.1735C10 51.2856 23.0614 64.347 39.1735 64.347ZM39.1735 54.7677C49.9951 54.7677 58.7677 45.9951 58.7677 35.1736C58.7677 24.352 49.9951 15.5794 39.1735 15.5794C28.352 15.5794 19.5794 24.352 19.5794 35.1736C19.5794 45.9951 28.352 54.7677 39.1735 54.7677Z"
        css={{ fill: color }}
      />
      <Path
        d="M65.5402 57.063L88.59 81.7809C90.4733 83.8005 90.3628 86.9644 88.3432 88.8477L86.7402 90.3426C84.7206 92.2259 81.5567 92.1154 79.6734 90.0958L56.6236 65.3779L65.5402 57.063Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
