import { Svg, Path, Rect, Circle } from "@proControl/lib/ui/svg"

export const RoboterIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Circle cx="45" cy="66.0994" r="9" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.3325 41.5017L27 41.6982L36.4497 57.6794C38.626 55.4695 41.6533 54.0994 45 54.0994C45.2495 54.0994 45.4976 54.1069 45.7432 54.1218C46.2495 54.1528 46.7476 54.2153 47.2349 54.3071L37.7896 38.333C36.0469 40.635 33.4282 42.0994 30.5 42.0994C29.3892 42.0994 28.3232 41.8889 27.3325 41.5017Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.5084 73.0525C31.1911 74.1597 28 78.077 28 82.7396V89.166C28 90.2705 28.8954 91.166 30 91.166H60C61.1046 91.166 62 90.2705 62 89.166V82.7396C62 78.0771 58.8091 74.1599 54.492 73.0526C52.5204 76.2685 49.0066 78.4092 45.0003 78.4092C40.9939 78.4092 37.48 76.2685 35.5084 73.0525Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.0273 23.9704C37.8579 25.8845 39 28.5944 39 31.5993C39 32.0485 38.9741 32.4914 38.9248 32.926C39.6406 33.1054 40.4072 33.1286 41.1777 32.9648L58.0474 29.3791C60.7485 28.8051 62.4727 26.1499 61.8984 23.4489L61.6904 22.4707C61.1162 19.7697 58.4614 18.0454 55.7603 18.6196L38.8906 22.2053C37.7148 22.4553 36.7241 23.0996 36.0273 23.9704Z"
        css={{ fill: color }}
      />
      <Circle cx="29.5" cy="31.5994" r="6.5" css={{ fill: color }} />
      <Rect
        x="66.5288"
        y="6.46411"
        width="6"
        height="28.0323"
        rx="3"
        transform="rotate(-14.1241 66.5288 6.46411)"
        css={{ fill: color }}
      />
      <Rect
        x="77.0747"
        y="5.90845"
        width="2.50621"
        height="9.85136"
        rx="1.2531"
        transform="rotate(-14.1241 77.0747 5.90845)"
        css={{ fill: color }}
      />
      <Rect
        x="80.019"
        y="19.042"
        width="2.50621"
        height="9.85136"
        rx="1.2531"
        transform="rotate(-14.1241 80.019 19.042)"
        css={{ fill: color }}
      />
      <Rect
        x="73.3604"
        y="27.0605"
        width="2.50621"
        height="9.85136"
        rx="1.2531"
        transform="rotate(-105.624 73.3604 27.0605)"
        css={{ fill: color }}
      />
      <Rect
        x="70.979"
        y="14.3792"
        width="2.50621"
        height="9.85136"
        rx="1.2531"
        transform="rotate(-105.624 70.979 14.3792)"
        css={{ fill: color }}
      />
      <Rect
        x="65.3711"
        y="25.1956"
        width="7"
        height="8"
        rx="2"
        transform="rotate(-103.624 65.3711 25.1956)"
        css={{ fill: color }}
      />
    </Svg>
  )
}
