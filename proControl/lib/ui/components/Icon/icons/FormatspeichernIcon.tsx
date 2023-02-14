import { Svg, Path } from "@proControl/lib/ui/svg"

export const FormatspeichernIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 13H44.142L61.77 30.628V45.39H49.13V39.86H23.85V45.39H46.39C45.2854 45.39 44.39 46.2854 44.39 47.39V49.34H23.85V54.87H44.39V58.82H23.85V64.35H44.39V74.62H15C13.3431 74.62 12 73.2769 12 71.62V16C12 14.3431 13.3431 13 15 13ZM41.625 32.75H57.03L41.625 17.74V32.75Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.0007 47.76H46.7607V92H79.1438L91.0007 80.1431V47.76ZM53.8705 52.5H83.8905V67.51H53.8705V52.5ZM81.5203 72.25H53.8703V84.89H81.5203V72.25Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.1507 74.6199H65.7207V82.5199H79.1507V74.6199ZM76.7807 76.9899H74.4107V80.1499H76.7807V76.9899Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
