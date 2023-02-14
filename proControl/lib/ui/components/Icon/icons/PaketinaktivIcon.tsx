import { Svg, Path } from "@proControl/lib/ui/svg"

export const PaketinaktivIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M21 37.5L36.5 22H80V63.5L64.5 79H21V37.5Z" css={{ fill: color }} fillOpacity="0.2" />
      <Path
        d="M21 37.5L36.5 22H80M21 37.5H64.5M21 37.5V79H64.5M80 22L64.5 37.5M80 22V63.5L64.5 79M64.5 37.5V79"
        stroke="white"
      />
      <Path d="M21 37.5L36.5 22H80V63.5L64.5 79H21V37.5Z" css={{ fill: color }} fillOpacity="0.2" />
      <Path
        d="M21 37.5L36.5 22H80M21 37.5H64.5M21 37.5V79H64.5M80 22L64.5 37.5M80 22V63.5L64.5 79M64.5 37.5V79"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="3"
      />
    </Svg>
  )
}
