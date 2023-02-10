import { ipcMain } from "electron"
import { MyEventData, MyEventType } from "./Playground"

export default () => {
  console.log("Playground init not implemented")
  ipcMain.on("myEvent" as MyEventType, (_, data: MyEventData) => {
    console.log(data)
  })
}
