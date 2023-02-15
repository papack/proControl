import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const HilfeIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        d="M40.8367 70V65.3748C40.8367 61.0168 41.5526 57.3988 42.9843 54.5209C44.4161 51.6429 46.2297 49.2378 48.4251 47.3055C50.6204 45.3321 52.8158 43.5642 55.0112 42.0019C57.4929 40.234 59.6406 38.4456 61.4541 36.6366C63.2677 34.7865 64.1745 32.4636 64.1745 29.6679C64.1745 26.8311 63.0529 24.4671 60.8098 22.5759C58.5667 20.6847 55.3214 19.7391 51.0738 19.7391C46.0626 19.7391 42.2446 21.0342 39.6197 23.6243C37.0425 26.1733 35.7539 29.709 35.7539 34.2315H18C18 28.0645 19.384 22.802 22.1521 18.444C24.9202 14.0449 28.786 10.7147 33.7494 8.45351C38.7129 6.15117 44.4877 5 51.0738 5C57.7554 5 63.387 6.0895 67.9687 8.2685C72.5981 10.4475 76.082 13.4076 78.4206 17.149C80.8069 20.8903 82 25.0838 82 29.7296C82 33.3476 81.3557 36.3899 80.0671 38.8567C78.8262 41.3235 77.2274 43.4409 75.2707 45.2087C73.3139 46.9766 71.3095 48.6211 69.2573 50.1423C67.4437 51.4991 65.7256 52.8763 64.1029 54.2742C62.4802 55.672 61.1678 57.2755 60.1656 59.0844C59.1633 60.8934 58.6622 63.0313 58.6622 65.4981V70H40.8367Z"
        css={{ fill: color }}
      />
      <Rect x="40" y="79" width="17" height="16" css={{ fill: color }} />
    </Svg>
  )
}