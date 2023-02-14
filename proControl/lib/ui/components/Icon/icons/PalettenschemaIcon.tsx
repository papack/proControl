import { Svg, Path } from "@proControl/lib/ui/svg"

export const PalettenschemaIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M89 77H11V79V80V87H20V80H46V87H55V80H80V87H89V80V79V77Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M89 39H11V41V42V49H20V42H46V49H55V42H80V49H89V42V41V39Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 14H13V36H48V14ZM45 17H16V33H45V17Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 52H14V74H36V52ZM33 55H17V71H33V55Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68 52H39V74H68V52ZM65 55H42V71H65V55Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87 52H71V74H87V52ZM84 55H74V71H84V55Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61 14H51V36H61V14ZM58 17H54V33H58V17Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74 14H64V36H74V14ZM71 17H67V33H71V17Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87 14H77V36H87V14ZM84 17H80V33H84V17Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
