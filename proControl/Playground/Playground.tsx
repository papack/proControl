import { useEffect } from "react"
import { useNavigationState } from "@proControl/Navigation"
import { useEvents, useCommand, useRequest } from "@proControl/sys"

export type MyEventType = "myEvent" | "done"
export interface MyEventData {
  name: string
  age: number
}

export type MyCommandType = "myCommand"
export interface MyEventData {
  name: string
  age: number
}

export type MyRequestType = "myRequest"
export interface MyRequestData {
  name: string
  age: number
}

export const Playground = () => {
  //hooks
  const { location: module } = useNavigationState()
  const { emit, on } = useEvents<MyEventType, MyEventData>()
  const { order } = useCommand<MyCommandType, MyEventData>()
  const { request } = useRequest<MyRequestType, MyRequestData, MyEventData>()

  useEffect(() => {
    console.log(order)
  }, [])

  if (module !== "playground") return null

  return (
    <>
      <div>
        <button
          onClick={() => {
            order("myCommand", {
              age: 5,
              name: "form playground"
            })
          }}
        >
          order
        </button>
        <button
          onClick={() => {
            request("myRequest", {
              age: 5,
              name: "form playground"
            }).then((data) => {
              console.log(data)
            })
          }}
        >
          request
        </button>
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
            on("done", handler)
          }}
        >
          listen
        </button>
      </div>
    </>
  )
}
