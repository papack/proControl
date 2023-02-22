import { HeadlineProps } from "./types"
import { H2 } from "@proControl/lib/ui/html"

export const Headline = ({ title = "" }: HeadlineProps) => {
  return <H2 css={{ fontWeight: "$light" }}>{title.toUpperCase()}</H2>
}
