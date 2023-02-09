import { IpcRendererEvent, ipcRenderer } from "electron"
import { useCallback } from "react"

export const useEvents = <TEvent, TDataInterface>() => {
  //on: subscripte to event
  const on = useCallback(
    (event: TEvent, handler: (event: IpcRendererEvent, data: TDataInterface) => void) => {
      //add handler / listener
      ipcRenderer.on(event as string, handler)
    },
    []
  )

  //off: unSubscript from event
  const off = useCallback(
    (event: TEvent, handler: (event: IpcRendererEvent, data: TDataInterface) => void) => {
      ipcRenderer.off(event as string, handler)
    },
    []
  )

  //send: emit event
  const emit = useCallback((event: TEvent, data: TDataInterface) => {
    ipcRenderer.send(event as string, data)
  }, [])

  return { on, off, emit }
}
