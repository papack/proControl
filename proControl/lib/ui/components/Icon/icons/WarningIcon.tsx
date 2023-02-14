import { Svg, Path } from "@proControl/lib/ui/svg"

export const WarningIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.6959 8.05238C49.4509 6.6492 51.4634 6.64921 52.2184 8.05238L96.6728 90.6759C97.3897 92.0084 96.4246 93.6235 94.9115 93.6235H6.00279C4.48973 93.6235 3.52463 92.0083 4.24153 90.6759L48.6959 8.05238ZM45.9971 34.0356H54.9971V69.0356H45.9971V34.0356ZM54.9971 77.0356H45.9971V86.0356H54.9971V77.0356Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
