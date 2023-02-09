import { useCallback } from "react"
import { ElectronAPI } from "@electron-toolkit/preload"
declare global {
  interface Window {
    electron: ElectronAPI
  }
}

export const useCommand = <TCommandName, TCommandData>() => {
  //Generic Command Function
  const send = useCallback(
    async (name: TCommandName, data: TCommandData) => {
      window.electron.ipcRenderer.send(name as string, data as any)
    },
    [window.electron.ipcRenderer]
  )

  return { send }
}
