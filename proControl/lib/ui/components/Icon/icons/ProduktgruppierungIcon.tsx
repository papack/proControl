import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const ProduktgruppierungIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="21" y="17" width="36" height="7" css={{ fill: color }} />
      <Path
        d="M10.8978 21.2623C10.4275 20.8629 10.4275 20.1371 10.8978 19.7377L21.1028 11.0732C21.7524 10.5217 22.75 10.9834 22.75 11.8355V29.1645C22.75 30.0166 21.7524 30.4783 21.1028 29.9267L10.8978 21.2623Z"
        css={{ fill: color }}
      />
      <Path
        d="M11.8978 21.2623C11.4275 20.8629 11.4275 20.1371 11.8978 19.7377L22.1028 11.0732C22.7524 10.5217 23.75 10.9834 23.75 11.8355V29.1645C23.75 30.0166 22.7524 30.4783 22.1028 29.9267L11.8978 21.2623Z"
        css={{ fill: color }}
      />
      <Path
        d="M64.1022 19.7377C64.5725 20.1371 64.5725 20.8629 64.1022 21.2623L53.8972 29.9268C53.2476 30.4783 52.25 30.0166 52.25 29.1645V11.8355C52.25 10.9834 53.2476 10.5217 53.8972 11.0733L64.1022 19.7377Z"
        css={{ fill: color }}
      />
      <Path
        d="M81.7377 36.8978C82.1371 36.4275 82.8629 36.4275 83.2623 36.8978L91.9268 47.1028C92.4783 47.7524 92.0166 48.75 91.1645 48.75H73.8355C72.9834 48.75 72.5217 47.7524 73.0733 47.1028L81.7377 36.8978Z"
        css={{ fill: color }}
      />
      <Rect
        x="79"
        y="79"
        width="34"
        height="7"
        transform="rotate(-90 79 79)"
        css={{ fill: color }}
      />
      <Path
        d="M83.2623 89.1022C82.8629 89.5725 82.1371 89.5725 81.7377 89.1022L73.0732 78.8972C72.5217 78.2476 72.9834 77.25 73.8355 77.25H91.1645C92.0166 77.25 92.4783 78.2476 91.9267 78.8972L83.2623 89.1022Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 37H11V61H35V37ZM29 43H17V55H29V43Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63 37H39V61H63V37ZM57 43H45V55H57V43Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 65H11V89H35V65ZM29 71H17V83H29V71Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63 65H39V89H63V65ZM57 71H45V83H57V71Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
