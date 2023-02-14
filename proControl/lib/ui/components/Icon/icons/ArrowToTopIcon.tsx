import { Svg, Path } from "@proControl/lib/ui/svg"

export const ArrowToTopIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        d="M17.5613 61.8889C16.794 62.6835 16.8161 63.9496 17.6107 64.7169L21.5952 68.5647C22.3897 69.332 23.6559 69.3099 24.4231 68.5153L49 43.3188L75.1913 69.7081C75.9586 70.5027 77.2248 70.5248 78.0193 69.7575L82.0038 65.9097C82.7984 65.1424 82.8205 63.8763 82.0532 63.0817L55.0543 35.1236L50.5944 30.5613C49.7998 29.794 48.5337 29.8161 47.7664 30.6107L17.5613 61.8889Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
