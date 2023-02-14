import { Svg, Path, Ellipse } from "@proControl/lib/ui/svg"

export const BenutzerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Ellipse cx="48.4999" cy="33.0704" rx="19.2714" ry="20.0704" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.2925 46.8027H23C17.4772 46.8027 13 51.2799 13 56.8027V85.9999C13 87.1045 13.8954 87.9999 15 87.9999H82C83.1046 87.9999 84 87.1045 84 85.9999V56.8027C84 51.2799 79.5229 46.8027 74 46.8027H68.7077C64.6741 54.3805 57.1349 59.4787 48.5001 59.4787C39.8653 59.4787 32.3261 54.3805 28.2925 46.8027Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
