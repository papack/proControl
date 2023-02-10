import { useCallback } from "react"

//
// laut der Doku löst der renderer on nicht aus wenn vom
// renderer was emittet wird
// deshalb muss man hier doch einen eigenen event schreiben
// bei on. löst man dann einfach den internen aus
//

export const useEvents = <TEvent, TDataInterface>() => {
  //on: subscripte to event
  const on = useCallback(
    (event: TEvent, handler: (event: any, data: TDataInterface) => void) => {
      //add handler / listener
      window.electron.ipcRenderer.on(event as string, (_, data) => {
        console.log("data")
      })
    },
    [window.electron.ipcRenderer.on]
  )

  //off: unSubscript from event
  const off = useCallback((event: TEvent, handler: (event: any, data: TDataInterface) => void) => {
    window.electron.ipcRenderer.removeListener(event as string, handler)
  }, [])

  //send: emit event
  const emit = useCallback((event: TEvent, data: TDataInterface) => {
    window.electron.ipcRenderer.send(event as string, data)
  }, [])

  return { on, off, emit }
}
