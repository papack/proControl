import { useCallback } from "react"

export const useCommand = <TCommandName, TCommandData>() => {
  //Generic Command Function
  const order = useCallback((name: TCommandName, data: TCommandData) => {
    window.electron.ipcRenderer.invoke(name as string, data as any)
  }, [])

  return { order }
}
