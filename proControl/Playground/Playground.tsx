import { useEffect } from "react"
import { useNavigationState } from "@proControl/Navigation"
import { useEvents } from "@proControl/sys/useEvents"

export type MyEventType = "myEvent"
export interface MyEventData {
  name: string
  age: number
}

export const Playground = () => {
  //hooks
  const { location: module } = useNavigationState()
  const { emit } = useEvents<MyEventType, MyEventData>()

  useEffect(() => {
    console.log("add listener")
  }, [])

  if (module !== "playground") return null

  return (
    <>
      <div>
        <button
          onClick={() => {
            //emit("myEvent", { age: 2, name: "frank" })
            window.electron.ipcRenderer.sendToHost("myEvent", { age: 2, name: "test" })
          }}
        >
          emit
        </button>
        <button
          onClick={() => {
            //emit("myEvent", { age: 2, name: "frank" })
            window.electron.ipcRenderer.on("myEvent", () => {
              console.log("i hear it")
            })
          }}
        >
          listen
        </button>
      </div>
    </>
  )
}
