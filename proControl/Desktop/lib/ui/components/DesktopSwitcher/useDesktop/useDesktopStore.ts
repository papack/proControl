import { create } from "zustand"
import { DesktopStore } from "./interfaces"

export const useDesktopStore = create<DesktopStore>((set) => ({
  currentDesktop: 0,
  numberOfDesktops: 0,
  desktopWidth: 0,
  setCurrentDesktop: (currentDesktop) => set(() => ({ currentDesktop })),
  setNumberOfDesktops: (numberOfDesktops) => set(() => ({ numberOfDesktops })),
  setDesktopWidth: (desktopWidth) => set(() => ({ desktopWidth }))
}))
