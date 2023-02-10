import { useCallback } from "react"
import { ElectronAPI } from "@electron-toolkit/preload"

//declare global,
declare global {
  interface Window {
    electron: ElectronAPI
  }
}

export const useCommand = <TCommandName, TCommandData>() => {
  //Generic Command Function
  const order = useCallback((name: TCommandName, data: TCommandData) => {
    window.electron.ipcRenderer.invoke(name as string, data)
  }, [])

  return { order }
}
