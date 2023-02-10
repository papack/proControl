import { ipcMain } from "electron"
import { MyEventData, MyEventType } from "./Playground"
import { mainWindow } from "../sys"

export default () => {
  console.log("Playground init not implemented")
  ipcMain.on("myEvent" as MyEventType, (_, data: MyEventData) => {
    console.log(data)
    setTimeout(() => {
      mainWindow.webContents.send("a", { age: 5, name: "fromMain" })
    }, 3000)
  })
}
