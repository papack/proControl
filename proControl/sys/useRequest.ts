import { useCallback } from "react"
import { ElectronAPI } from "@electron-toolkit/preload"

//declare global, for debug commands
declare global {
  interface Window {
    electron: ElectronAPI
  }
}

export const useRequest = <TRequestName, TRequestData, TResultData>() => {
  //Generic Request Function
  const request = useCallback(
    async (name: TRequestName, data: TRequestData): Promise<TResultData> => {
      return await window.electron.ipcRenderer.invoke(name as string, data)
    },
    [window.electron.ipcRenderer.invoke]
  )

  return { request }
}
