import { useEffect } from "react"
import { useNavigationState } from "@proControl/Navigation"
import { useEvents } from "@proControl/sys/useEvents"

export type MyEventType = "myEvent" | "a"
export interface MyEventData {
  name: string
  age: number
}

export const Playground = () => {
  //hooks
  const { location: module } = useNavigationState()
  const { emit, on, off } = useEvents<MyEventType, MyEventData>()

  if (module !== "playground") return null

  return (
    <>
      <div>
        <button
          onClick={() => {
            console.log("i emit")
            emit("myEvent", { age: 2, name: "frank" })
          }}
        >
          emit
        </button>
        <button
          onClick={() => {
            const handler = (data: MyEventData) => {
              console.log(data.name)
            }

            on("myEvent", handler)
            on("a", handler)
            off("a", handler)
          }}
        >
          listen
        </button>
      </div>
    </>
  )
}
