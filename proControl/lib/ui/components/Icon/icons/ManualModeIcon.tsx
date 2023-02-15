import { Svg, Path } from "@proControl/lib/ui/svg"

export const ManualModeIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.7047 43.5405C48.7047 42.399 47.7794 41.4736 46.6378 41.4736C45.4963 41.4736 44.571 42.399 44.571 43.5405V57.1819L44.571 57.1848L44.5077 57.1819V66.0916C42.6671 63.7972 40.0223 60.6694 38.9897 60.2822C37.3361 59.6622 34.547 60.459 35.0626 64.2093L44.5077 78.5822V78.6774H44.5703L44.5703 78.6774H47.0505L47.0505 78.6774H61.9717C63.4012 70.4981 63.7404 66.7261 63.9306 60.842C63.976 60.6629 64.0001 60.4754 64.0001 60.2822V58.2153C64.0001 56.9596 62.9822 55.9417 61.7265 55.9417C60.4708 55.9417 59.4529 56.9596 59.4529 58.2153V59.2544C59.2813 59.2067 59.1107 59.16 58.9412 59.1145C59.005 58.8947 59.0392 58.6624 59.0392 58.422V56.7685C59.0392 55.3987 57.9288 54.2883 56.5589 54.2883C55.1891 54.2883 54.0787 55.3987 54.0787 56.7685V58.0566C53.9386 58.0334 53.7982 58.0108 53.6576 57.9888C53.6626 57.9271 53.6652 57.8648 53.6652 57.8018V55.7349C53.6652 54.4793 52.6473 53.4614 51.3916 53.4614C50.1359 53.4614 49.118 54.4793 49.118 55.7349V57.4626C48.9764 57.451 48.8338 57.4397 48.6902 57.4286C48.6998 57.3477 48.7047 57.2654 48.7047 57.1819V43.5405Z"
        css={{ fill: color }}
      />
      <Path
        d="M50.2501 46.7954C52.4918 45.6099 54 43.3941 54 40.8563C54 37.0697 50.6421 34 46.5 34C42.3579 34 39 37.0697 39 40.8563C39 43.5484 40.6972 45.8781 43.1667 47V43.0745C43.1667 41.1812 44.7524 39.6464 46.7084 39.6464C48.6644 39.6464 50.2501 41.1812 50.2501 43.0745V46.7954Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.4922 21.7584V30.509L61.8229 16.9725L43.4922 4V12.7642C35.9533 13.8827 28.8152 17.0245 22.8643 21.9083C15.299 28.1169 10.1206 36.7566 8.21132 46.3553C6.30203 55.9539 7.78001 65.9177 12.3934 74.5488C17.0069 83.1799 24.4703 89.9443 33.512 93.6895C42.5537 97.4347 52.6144 97.929 61.9797 95.0881C71.345 92.2471 79.4355 86.2468 84.8727 78.1094C90.3099 69.9721 92.7574 60.2012 91.7981 50.4616C90.8388 40.722 86.5322 31.6164 79.6119 24.6961L73.3394 30.9687C78.8084 36.4378 82.212 43.6339 82.9701 51.3311C83.7282 59.0283 81.7939 66.7502 77.4969 73.1811C73.1999 79.612 66.806 84.3541 59.4046 86.5993C52.0033 88.8445 44.0524 88.4539 36.9067 85.494C29.761 82.5342 23.8627 77.1883 20.2167 70.3671C16.5708 63.546 15.4027 55.6717 16.9116 48.0859C18.4205 40.5001 22.513 33.6721 28.4918 28.7655C32.8509 25.1881 38.016 22.7934 43.4922 21.7584Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}