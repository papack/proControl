import { ElectronAPI } from "@electron-toolkit/preload"
declare global {
  interface Window {
    electron: ElectronAPI
  }
}

export const useSystemInfo = () => {
  return {
    versions: window.electron.process.versions,
    pwd:
      window.electron.process.env.PORTABLE_EXECUTABLE_DIR ||
      window.electron.process.env.PWD ||
      "c:/"
  }
}
