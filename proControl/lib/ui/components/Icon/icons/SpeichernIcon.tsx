import { Svg, Path } from "@proControl/lib/ui/svg"

export const SpeichernIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3C5.89551 3 5 3.89551 5 5V95C5 96.1045 5.89551 97 7 97H77.375L95 79.375V5C95 3.89551 94.1045 3 93 3H7ZM21 9C19.8955 9 19 9.89551 19 11V41C19 42.1045 19.8955 43 21 43H80C81.1045 43 82 42.1045 82 41V11C82 9.89551 81.1045 9 80 9H21ZM22 57C22 55.8955 22.8955 55 24 55H73C74.1045 55 75 55.8955 75 57V85C75 86.1045 74.1045 87 73 87H24C22.8955 87 22 86.1045 22 85V57Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 59C40.8955 59 40 59.8955 40 61V81C40 82.1045 40.8955 83 42 83H70C71.1045 83 72 82.1045 72 81V61C72 59.8955 71.1045 59 70 59H42ZM66 61H59V81H66V61Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
