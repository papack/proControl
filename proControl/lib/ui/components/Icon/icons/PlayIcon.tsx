import { Svg, Path } from "@proControl/lib/ui/svg"

export const PlayIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6058 92.0809L83.0151 52.5335C84.8741 51.3556 84.8741 48.6434 83.0151 47.4654L20.6058 7.91805C18.6084 6.65233 16 8.08743 16 10.4521V89.5468C16 91.9115 18.6084 93.3466 20.6058 92.0809ZM23.9999 78.9995L69.9999 49.9995L23.9999 20.9995V78.9995Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
