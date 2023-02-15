import { Svg, Path } from "@proControl/lib/ui/svg"

export const ZuruecksetzenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 101 100" fill="none">
      <Path
        d="M55.5 88C63.3124 88 70.9493 85.6834 77.445 81.343C83.9408 77.0027 89.0036 70.8337 91.9932 63.616C94.9829 56.3983 95.7651 48.4562 94.241 40.7939C92.7169 33.1317 88.9549 26.0935 83.4307 20.5693C77.9065 15.0451 70.8683 11.2831 63.2061 9.75898C55.5438 8.23487 47.6017 9.0171 40.384 12.0068C33.1663 14.9964 26.9973 20.0592 22.657 26.555C18.3166 33.0507 16 40.6876 16 48.5L30.1636 48.5C30.1636 43.4889 31.6495 38.5904 34.4335 34.4238C37.2175 30.2573 41.1746 27.0099 45.8042 25.0922C50.4338 23.1746 55.5281 22.6728 60.4429 23.6504C65.3577 24.628 69.8722 27.0411 73.4156 30.5845C76.9589 34.1278 79.372 38.6423 80.3496 43.5571C81.3272 48.4719 80.8254 53.5662 78.9078 58.1958C76.9901 62.8255 73.7427 66.7825 69.5762 69.5665C65.4096 72.3505 60.5111 73.8364 55.5 73.8364V88Z"
        css={{ fill: color }}
      />
      <Path d="M22.5 73L3.01443 47.5H41.9856L22.5 73Z" css={{ fill: color }} />
    </Svg>
  )
}