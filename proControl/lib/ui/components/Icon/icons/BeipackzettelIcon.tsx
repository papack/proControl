import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const BeipackzettelIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M5 17H88C88.5523 17 89 17.4477 89 18V24H5V17Z" css={{ fill: color }} />
      <Rect x="19" y="72" width="70" height="7" css={{ fill: color }} />
      <Rect x="19" y="27" width="71" height="7" css={{ fill: color }} />
      <Rect x="25.769" y="51.6155" width="6.92308" height="3.46154" css={{ fill: color }} />
      <Rect x="63.8462" y="48.1538" width="3.46154" height="20.7692" css={{ fill: color }} />
      <Rect x="70.769" y="41.2307" width="3.46154" height="27.6923" css={{ fill: color }} />
      <Rect x="81.1538" y="48.1538" width="3.46154" height="20.7692" css={{ fill: color }} />
      <Rect x="19" y="33" width="7" height="40" css={{ fill: color }} />
      <Rect x="5" y="23" width="7" height="40" css={{ fill: color }} />
      <Rect x="5" y="62" width="15" height="7" css={{ fill: color }} />
      <Rect x="25.769" y="58.5386" width="6.92308" height="3.46154" css={{ fill: color }} />
      <Rect x="25.769" y="65.4614" width="6.92308" height="3.46154" css={{ fill: color }} />
      <Rect x="88" y="23" width="7" height="50" rx="1" css={{ fill: color }} />
      <Path
        d="M95 23.9231C95 23.0139 94.7911 22.1137 94.3852 21.2737C93.9793 20.4338 93.3844 19.6706 92.6344 19.0277C91.8844 18.3849 90.994 17.8749 90.014 17.527C89.0341 17.1791 87.9838 17 86.9231 17L86.9231 23.9231H95Z"
        css={{ fill: color }}
      />
      <Path
        d="M88.5 79C89.3536 79 90.1988 78.7931 90.9874 78.391C91.7761 77.989 92.4926 77.3997 93.0962 76.6569C93.6998 75.914 94.1786 75.0321 94.5052 74.0615C94.8319 73.0909 95 72.0506 95 71L88.5 71V79Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
