import { Svg, Path } from "@proControl/lib/ui/svg"

export const KalkulationIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 7C22 6.44775 22.4473 6 23 6H28H72H77C77.5527 6 78 6.44775 78 7V12V88V93C78 93.5522 77.5527 94 77 94H72H28H23C22.4473 94 22 93.5522 22 93V88V12V7ZM71 87H29V13H71V87ZM34 19H67V38H34V19ZM37 22H64V35H37V22ZM40 50V56H34V50H40ZM40 68V62H34V68H40ZM40 75V81H34V75H40ZM53 50H47V56H53V50ZM47 62H53V68H47V62ZM53 75H47V81H53V75ZM59 50H65V56H59V50ZM65 62H59V81H65V62Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
