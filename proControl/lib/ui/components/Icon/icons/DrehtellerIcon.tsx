import { Svg, Path } from "@proControl/lib/ui/svg"

export const DrehtellerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90 50C90 72.0913 72.0918 90 50 90C27.9082 90 10 72.0913 10 50C10 27.9087 27.9082 10 50 10C72.0918 10 90 27.9087 90 50ZM84 50C84 68.7776 68.7773 84 50 84C31.2227 84 16 68.7776 16 50C16 31.2224 31.2227 16 50 16C68.7773 16 84 31.2224 84 50ZM62.5 67C65.5371 67 68 64.5376 68 61.5C68 58.4624 65.5371 56 62.5 56C59.4629 56 57 58.4624 57 61.5C57 64.5376 59.4629 67 62.5 67Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
