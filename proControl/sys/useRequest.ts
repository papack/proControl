import { useCallback } from "react"

export const useRequest = <TRequestName, TRequestData, TResultData>() => {
  //Generic Request Function
  const request = useCallback(
    async (name: TRequestName, data: TRequestData): Promise<TResultData> => {
      return await window.electron.ipcRenderer.invoke(name as string, data as any)
    },
    []
  )

  return { request }
}
