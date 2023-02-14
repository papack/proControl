import { Svg, Path } from "@proControl/lib/ui/svg"

export const SethomeIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77 39.5C77 46.2676 74.5554 52.4644 70.501 57.2551L51.168 86.4785C50.3772 87.6738 48.6228 87.6738 47.832 86.4785L28.499 57.2551C24.4446 52.4644 22 46.2676 22 39.5C22 24.3123 34.3123 12 49.5 12C64.6877 12 77 24.3123 77 39.5ZM49.5 53C58.0603 53 65 46.2842 65 38C65 29.7158 58.0603 23 49.5 23C40.9397 23 34 29.7158 34 38C34 46.2842 40.9397 53 49.5 53Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
