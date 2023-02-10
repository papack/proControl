import { IpcRendererEvent } from "@electron-toolkit/preload"
import { useCallback } from "react"

/*eslint-disable */
//types, interfaces, enums, etc. go here
type ObserverFunc = (ipcRendererEvent?: IpcRendererEvent, data?: any) => void
interface ObserverList {
  [key: string]: Array<ObserverFunc>
}

//global observers list
const observers: ObserverList = {}
/*eslint-enable */

export const useEvents = <TEventType, TDataInterface>() => {
  //events on
  const on = useCallback(
    (
      event: TEventType,
      handler: (ipcRendererEvent: IpcRendererEvent, data: TDataInterface) => void
    ) => {
      //create new observer list, if not exist
      if (!observers[event as string]) {
        observers[event as string] = [] //create new array for event
      }

      //if the first listener: connect to ipc main
      if (observers[event as string].length === 0) {
        window.electron.ipcRenderer.on(
          event as string,
          (ipcRendererEvent: IpcRendererEvent, data) => {
            emit(event, data, ipcRendererEvent)
          }
        )
      }

      //add listener to ui events
      observers[event as string].push(handler as ObserverFunc)
    },
    []
  )

  //events emit
  const emit = useCallback(
    (event: TEventType, data: TDataInterface, ipcRendererEvent?: IpcRendererEvent) => {
      //forward events from render to main
      if (!ipcRendererEvent) {
        window.electron.ipcRenderer.send(event as string, data)
      }

      //call all observers
      if (!observers[event as string]) return
      observers[event as string].forEach((callback) => callback(ipcRendererEvent, data))
    },
    []
  )

  //events off
  const off = useCallback(
    (
      event: TEventType,
      handler: (ipcRendererEvent: IpcRendererEvent, data: TDataInterface) => void
    ) => {
      if (!observers[event as string]) return
      observers[event as string] = observers[event as string].filter((h) => h !== handler)

      //remove from ipc, if the last removed
      if (observers[event as string].length === 0) {
        window.electron.ipcRenderer.removeAllListeners(event as string)
      }
    },
    []
  )

  return { on, off, emit }
}
