import { Svg, Path } from "@proControl/lib/ui/svg"

export const LoeschenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5669 25.4124C18.4623 25.4124 17.5669 26.3078 17.5669 27.4124V93C17.5669 94.1046 18.4623 95 19.5669 95H79.5875C80.6921 95 81.5875 94.1046 81.5875 93V27.4124C81.5875 26.3078 80.6921 25.4124 79.5875 25.4124H19.5669ZM28.7729 33.7629C28.2207 33.7629 27.7729 34.2107 27.7729 34.7629V85.6495C27.7729 86.2018 28.2207 86.6495 28.7729 86.6495H34.1956C34.7479 86.6495 35.1956 86.2018 35.1956 85.6495V34.7629C35.1956 34.2107 34.7479 33.7629 34.1956 33.7629H28.7729ZM45.4019 34.7629C45.4019 34.2106 45.8497 33.7629 46.4019 33.7629H51.8246C52.3769 33.7629 52.8246 34.2106 52.8246 34.7629V85.6495C52.8246 86.2018 52.3769 86.6495 51.8246 86.6495H46.4019C45.8497 86.6495 45.4019 86.2018 45.4019 85.6495V34.7629ZM64.0308 33.7629C63.4785 33.7629 63.0308 34.2106 63.0308 34.7629V85.6495C63.0308 86.2018 63.4785 86.6495 64.0308 86.6495H69.4535C70.0058 86.6495 70.4535 86.2018 70.4535 85.6495V34.7629C70.4535 34.2106 70.0058 33.7629 69.4535 33.7629H64.0308Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.0518 5C37.9472 5 37.0518 5.89543 37.0518 7V13.3505H14C12.8954 13.3505 12 14.2459 12 15.3505V20.6289C12 21.7334 12.8954 22.6289 14 22.6289H84.2268C85.3314 22.6289 86.2268 21.7334 86.2268 20.6289V15.3505C86.2268 14.2459 85.3314 13.3505 84.2268 13.3505H61.1755V7C61.1755 5.89543 60.28 5 59.1755 5H39.0518Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
