import { InfoTextProps } from "./types"

export const InfoText = ({ text, label }: InfoTextProps) => {
  return (
    <div>
      {label}: {text}
    </div>
  )
}
