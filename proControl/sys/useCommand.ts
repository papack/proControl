import { useCallback } from "react"
import { ipcRenderer } from "electron"

export const useCommand = <TCommandName, TCommandData>() => {
  //Generic Command Function
  const order = useCallback((name: TCommandName, data: TCommandData) => {
    ipcRenderer.invoke(name as string, data as any)
  }, [])

  return { order }
}
