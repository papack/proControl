import { mainWindow } from "./main"
import { ipcMain, IpcMainEvent } from "electron"

/*eslint-disable */
//types, interfaces, enums, etc. go here
type ObserverFunc = (data?: any, event?: IpcMainEvent) => void
interface ObserverList {
  [key: string]: Array<ObserverFunc>
}

//global observers list
const observers: ObserverList = {}
/*eslint-enable */

export const on = <TEventType, TDataInterface>(
  event: TEventType,
  handler: (data: TDataInterface, ipcMainEvent?: IpcMainEvent) => void
) => {
  //create new observer list, if not exist
  if (!observers[event as string]) {
    observers[event as string] = [] //create new array for event
  }

  //if the first listener: connect to ipc events from renderer
  if (observers[event as string].length === 0) {
    ipcMain.on(event as string, (ie: IpcMainEvent, data: TDataInterface) => {
      //emit(event, data)
      emit(event, data, ie)
    })
  }

  //add listener to ui events
  observers[event as string].push(handler as ObserverFunc)
}

//events emit
export const emit = <TEventType, TDataInterface>(
  event: TEventType,
  data: TDataInterface,
  ipcMainEvent?: IpcMainEvent
) => {
  //forward events from main to render
  if (!ipcMainEvent) {
    mainWindow.webContents.send(event as string, data)
  }

  //call all Observer
  if (!observers[event as string]) return
  observers[event as string].forEach((callback) => callback(data, ipcMainEvent))
}

//off event
export const off = <TEventType, TDataInterface>(
  event: TEventType,
  handler: (data: TDataInterface, ipcMainEvent?: IpcMainEvent) => void
) => {
  if (!observers[event as string]) return
  observers[event as string] = observers[event as string].filter((callback) => callback !== handler)

  //remove event from ipcMain, if no more listeners
  if (observers[event as string].length === 0) {
    ipcMain.removeAllListeners(event as string)
  }
}
