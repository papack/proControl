import { ipcMain } from "electron"
import { on, emit, off } from "../sys/events"

export default () => {
  ipcMain.handle("myCommand", (_, __) => {
    console.log("start command")
    emit("done", { name: "done from bkend", alter: 5 })
  })

  const doneHandler = (data: any) => {
    console.log("get done event", data)
  }

  on("done", doneHandler)
  off("done", doneHandler)
}
