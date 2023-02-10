import { ipcMain, IpcMainInvokeEvent } from "electron"

export const process = <TCommandName, TCommandData>(
  command: TCommandName,
  handler: (data: TCommandData, ipcMainInvoeEvent?: IpcMainInvokeEvent) => void
) => {
  ipcMain.handle(command as string, (ie: IpcMainInvokeEvent, data) => {
    handler(data, ie)
  })
}
