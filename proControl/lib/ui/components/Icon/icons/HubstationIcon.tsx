import { Svg, Path } from "@proControl/lib/ui/svg"

export const HubstationIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.5 5H61.75V16.25H30.8125V5.9375H27.0625V16.25V20H21.4375V15.3125H13V23.75H20.5H21.4375H74.875V66.875H72.0625V80.9375H65.5V53.75H64.5625H61.75H30.8125H27.0625V57.5V77.1875V80.9375H21.4375V76.25H13V84.6875H20.5H21.4375H74.875V95H86.125V5H74.875V9.6875H72.0625V20H65.5V5ZM30.8125 77.1875H61.75V57.5H30.8125V77.1875ZM46.75 33.125L36.4375 47.1875H57.0625L46.75 33.125Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
