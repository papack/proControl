import { IpcMainInvokeEvent, ipcMain } from "electron"

export const supply = <TCommandName, TCommandData, TReturn>(
  request: TCommandName,
  handler: (data: TCommandData, ipcMainInvoeEvent?: IpcMainInvokeEvent) => TReturn
) => {
  ipcMain.handle(request as string, (ie: IpcMainInvokeEvent, data) => {
    return handler(data, ie)
  })
}
