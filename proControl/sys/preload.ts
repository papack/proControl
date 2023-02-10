import { contextBridge } from "electron"
import { electronAPI } from "@electron-toolkit/preload"

// Use `contextBridge` APIs to expose Electron APIs to
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI)
  } catch (error) {
    console.error(error)
  }
}
