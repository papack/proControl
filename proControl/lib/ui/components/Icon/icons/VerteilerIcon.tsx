import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const VerteilerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="26.9996" y="45.001" width="11.9999" height="11.9999" css={{ fill: color }} />
      <Rect x="80.9999" y="45.001" width="11.9999" height="11.9999" css={{ fill: color }} />
      <Rect
        x="53.9991"
        y="19.3928"
        width="11.9999"
        height="11.9999"
        transform="rotate(-60 53.9991 19.3928)"
        css={{ fill: color }}
      />
      <Rect
        x="66.3922"
        y="76"
        width="11.9999"
        height="11.9999"
        transform="rotate(60 66.3922 76)"
        css={{ fill: color }}
      />
      <Path
        d="M57.8242 30.1947L60.8432 37.957L50.5221 34.2004L57.8242 30.1947Z"
        css={{ fill: color }}
      />
      <Path d="M71.3489 51.3423L65.0873 56.834V45.8505L71.3489 51.3423Z" css={{ fill: color }} />
      <Path
        d="M58.6661 71.4009L50.7793 68.724L60.2912 63.2323L58.6661 71.4009Z"
        css={{ fill: color }}
      />
      <Path d="M1.99988 31.9998H37.9997V38.9997H1.99988V31.9998Z" css={{ fill: color }} />
      <Path d="M45.1887 9L29 34.5738L37.3396 39L55 9H45.1887Z" css={{ fill: color }} />
      <Path d="M84.5 7L68.0001 32.9999L76.5001 37.4999L94.5 7H84.5Z" css={{ fill: color }} />
      <Path
        d="M45.4994 93.5005L28.9995 67.5006L37.4995 63.0006L55.4994 93.5005H45.4994Z"
        css={{ fill: color }}
      />
      <Path
        d="M84.5 95.5002L68.0001 69.5004L76.5001 65.0004L94.5 95.5002H84.5Z"
        css={{ fill: color }}
      />
      <Rect x="1" y="62.9988" width="35.9998" height="6.99997" css={{ fill: color }} />
      <Rect x="68.0001" y="31.9998" width="27.9999" height="6.99997" css={{ fill: color }} />
      <Rect x="68.0001" y="63.9985" width="27.9999" height="5.99997" css={{ fill: color }} />
    </Svg>
  )
}
