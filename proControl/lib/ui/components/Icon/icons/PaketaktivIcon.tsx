import { Svg, Path } from "@proControl/lib/ui/svg"

export const PaketaktivIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 141 139" fill="none">
      <g filter="url(#filter0_d_211_183)">
        <Path d="M41 56.5L56.5 41H100V82.5L84.5 98H41V56.5Z" css={{ fill: color }} />
        <Path
          d="M41 56.5L56.5 41H100M41 56.5H84.5M41 56.5V98H84.5M100 41L84.5 56.5M100 41V82.5L84.5 98M84.5 56.5V98"
          stroke="white"
        />
      </g>
      <Path
        d="M41 56.5L56.5 41H100M41 56.5H84.5M41 56.5V98H84.5M100 41L84.5 56.5M100 41V82.5L84.5 98M84.5 56.5V98"
        stroke="white"
        strokeWidth="2"
      />
      <defs>
        <filter
          id="filter0_d_211_183"
          x="0.5"
          y="0.5"
          width="140"
          height="138"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_211_183" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_211_183"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  )
}
