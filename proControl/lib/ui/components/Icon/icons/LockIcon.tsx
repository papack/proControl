import { Svg, Path, Rect, Circle } from "@proControl/lib/ui/svg"

export const LockIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Circle cx="50.5" cy="55.5" r="8.5" css={{ fill: color }} />
      <Path
        d="M45 59H56V70C56 72.7614 53.7614 75 51 75H50C47.2386 75 45 72.7614 45 70V59Z"
        css={{ fill: color }}
      />
      <Rect x="22" y="37" width="56" height="7" css={{ fill: color }} />
      <Rect x="22" y="81" width="56" height="7" css={{ fill: color }} />
      <Rect
        x="71"
        y="86"
        width="49"
        height="7"
        transform="rotate(-90 71 86)"
        css={{ fill: color }}
      />
      <Rect
        x="22"
        y="86"
        width="49"
        height="7"
        transform="rotate(-90 22 86)"
        css={{ fill: color }}
      />
      <Path
        d="M69 38C69 34.1917 68.4956 30.4206 67.5157 26.9022C66.5357 23.3837 65.0993 20.1868 63.2886 17.4939C61.4778 14.801 59.3282 12.6649 56.9623 11.2075C54.5965 9.75011 52.0608 9 49.5 9C46.9392 9 44.4035 9.75011 42.0377 11.2075C39.6718 12.6649 37.5222 14.801 35.7114 17.4939C33.9007 20.1868 32.4643 23.3837 31.4843 26.9022C30.5044 30.4206 30 34.1917 30 38H35.9752C35.9752 35.3586 36.325 32.7431 37.0047 30.3028C37.6844 27.8625 38.6806 25.6451 39.9365 23.7774C41.1924 21.9097 42.6834 20.4281 44.3243 19.4173C45.9652 18.4065 47.7239 17.8862 49.5 17.8862C51.2761 17.8862 53.0348 18.4065 54.6757 19.4173C56.3166 20.4281 57.8076 21.9097 59.0635 23.7774C60.3194 25.6451 61.3156 27.8625 61.9953 30.3028C62.675 32.7431 63.0248 35.3586 63.0248 38H69Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
