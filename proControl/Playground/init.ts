import { on, emit } from "../sys/events"
import { process } from "../sys/process"
import { supply } from "../sys/supply"

export default () => {
  process("myCommand", (data) => {
    console.log("start command", data)
    emit("done", { name: "done from bkend", alter: 5 })
  })

  const doneHandler = (data) => {
    console.log("get done event", data)
  }

  supply("myRequest", (data) => {
    console.log("start request", data)
    return { name: "done from bkend sup", alter: 5 }
  })

  on("done", doneHandler)
}
