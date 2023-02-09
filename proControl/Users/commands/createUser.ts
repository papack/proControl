import { UserCommandType, UserInterface } from "../types"
import { ipcMain } from "electron"

export const addUserCreatedListener = () => {
  ipcMain.on("createUser" as UserCommandType, (_, data: UserInterface) => {
    createUser(data)
  })
}
function createUser(data: UserInterface) {
  console.log("want create ", data.name)
  throw new Error("Crash in Handler")
}
