import { Svg, Path, Rect, Circle } from "@proControl/lib/ui/svg"

export const BenutzerWechselnIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Circle cx="37.8181" cy="21.2727" r="17.2727" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 33.0908H19.7063C23.3216 39.6123 30.0788 44 37.8182 44C45.5575 44 52.3148 39.6123 55.9301 33.0908H59.6364C65.1592 33.0908 69.6364 37.568 69.6364 43.0908V63.0909H51C48.2386 63.0909 46 65.3295 46 68.0909V68.5454H8C6.89543 68.5454 6 67.6499 6 66.5454V43.0908C6 37.568 10.4772 33.0908 16 33.0908Z"
        css={{ fill: color }}
      />
      <Rect x="52.3635" y="65.8181" width="25.4545" height="8.18182" rx="2" css={{ fill: color }} />
      <Rect x="46.9092" y="77.6365" width="25.4545" height="8.18182" rx="2" css={{ fill: color }} />
      <Path d="M96 69.909L74.8636 82.1121V57.7059L96 69.909Z" css={{ fill: color }} />
      <Path d="M27.8181 81.7272L48.9545 69.5241V93.9303L27.8181 81.7272Z" css={{ fill: color }} />
    </Svg>
  )
}
