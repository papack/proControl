import { Svg, Path } from "@proControl/lib/ui/svg"

export const CloseIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        d="M93.9805 80.6403L63.2305 49.7892L94.0508 19.3363C95.3164 18.0713 95.3164 16.0099 94.0508 14.7449L85.2852 5.93701C84.6758 5.32795 83.8555 5 82.9883 5C82.1211 5 81.3008 5.35138 80.6914 5.93701L50.0117 36.2962L19.2852 5.96044C18.6758 5.35138 17.8555 5.02343 16.9883 5.02343C16.1211 5.02343 15.3008 5.37481 14.6914 5.96044L5.94922 14.7684C4.68359 16.0333 4.68359 18.0947 5.94922 19.3597L36.7695 49.8126L6.04297 80.6403C5.43359 81.2494 5.08203 82.0692 5.08203 82.936C5.08203 83.8027 5.41016 84.6226 6.04297 85.2316L14.8086 94.0396C15.4414 94.672 16.2617 95 17.1055 95C17.9258 95 18.7695 94.6955 19.4023 94.0396L50.0117 63.3056L80.6445 94.0161C81.2773 94.6486 82.0977 94.9766 82.9414 94.9766C83.7617 94.9766 84.6055 94.672 85.2383 94.0161L94.0039 85.2082C94.6133 84.5992 94.9648 83.7793 94.9648 82.9125C94.9414 82.0692 94.5898 81.2494 93.9805 80.6403Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
