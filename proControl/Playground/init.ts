import { ipcMain } from "electron"
import { on, emit } from "../sys/events"

export default () => {
  ipcMain.handle("myCommand", (_, __) => {
    console.log("start command")
    emit("done", { name: "done from bkend", alter: 5 })
  })

  on("done", (_, __) => {
    console.log("get done event")
  })
}
