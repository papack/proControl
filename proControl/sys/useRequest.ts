import { useCallback } from "react"
import { ipcRenderer } from "electron"

export const useRequest = <TRequestName, TRequestData, TResultData>() => {
  //Generic Request Function
  const request = useCallback(
    async (name: TRequestName, data: TRequestData): Promise<TResultData> => {
      return await ipcRenderer.invoke(name as string, data as any)
    },
    []
  )

  return { request }
}
