import { Svg, Path } from "@proControl/lib/ui/svg"

export const DoorIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.5714 24.2857H84.9286C85.7811 24.2857 86.5986 24.6244 87.2014 25.2272C87.8042 25.83 88.1429 26.6475 88.1429 27.5V40.3571C88.1429 41.2096 87.8042 42.0272 87.2014 42.63C86.5986 43.2328 85.7811 43.5714 84.9286 43.5714H49.5714V91.7857C49.5714 92.6382 49.2328 93.4558 48.63 94.0586C48.0272 94.6614 47.2096 95 46.3571 95H14.2143C13.3618 95 12.5442 94.6614 11.9414 94.0586C11.3386 93.4558 11 92.6382 11 91.7857V8.21429C11 7.3618 11.3386 6.54424 11.9414 5.94144C12.5442 5.33865 13.3618 5 14.2143 5H46.3571C47.2096 5 48.0272 5.33865 48.63 5.94144C49.2328 6.54424 49.5714 7.3618 49.5714 8.21429V24.2857ZM17.4286 88.5714H43.1429V43.5714H30.2857C29.4332 43.5714 28.6157 43.2328 28.0129 42.63C27.4101 42.0272 27.0714 41.2096 27.0714 40.3571V27.5C27.0714 26.6475 27.4101 25.83 28.0129 25.2272C28.6157 24.6244 29.4332 24.2857 30.2857 24.2857H43.1429V11.4286H17.4286V88.5714ZM33.5 37.1429H81.7143V30.7143H33.5V37.1429ZM22.268 74.648C21.2084 73.0623 20.6429 71.1979 20.6429 69.2907C20.6429 66.7333 21.6588 64.2806 23.4672 62.4722C25.2756 60.6638 27.7283 59.6479 30.2857 59.6479C32.1929 59.6479 34.0572 60.2134 35.643 61.273C37.2288 62.3326 38.4647 63.8386 39.1946 65.6006C39.9244 67.3626 40.1154 69.3014 39.7433 71.172C39.3712 73.0425 38.4528 74.7607 37.1042 76.1093C35.7557 77.4578 34.0375 78.3762 32.1669 78.7483C30.2964 79.1204 28.3576 78.9294 26.5956 78.1996C24.8336 77.4697 23.3275 76.2338 22.268 74.648ZM32.9583 71.0765C33.3115 70.5479 33.5 69.9265 33.5 69.2907C33.5 68.4383 33.1614 67.6207 32.5586 67.0179C31.9558 66.4151 31.1382 66.0765 30.2857 66.0765C29.65 66.0765 29.0285 66.265 28.5 66.6182C27.9714 66.9713 27.5594 67.4734 27.3161 68.0607C27.0728 68.648 27.0092 69.2943 27.1332 69.9178C27.2572 70.5413 27.5633 71.1141 28.0129 71.5636C28.4624 72.0131 29.0351 72.3192 29.6586 72.4433C30.2821 72.5673 30.9284 72.5036 31.5158 72.2604C32.1031 72.0171 32.6051 71.6051 32.9583 71.0765Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}