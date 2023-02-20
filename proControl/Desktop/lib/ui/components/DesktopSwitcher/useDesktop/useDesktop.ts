import { useDesktopStore } from "./useDesktopStore";

export const useDesktop = () => {
  const currentDesktop = useDesktopStore((state) => state.currentDesktop);
  const numberOfDesktops = useDesktopStore((state) => state.numberOfDesktops);
  const desktopWidth = useDesktopStore((state) => state.desktopWidth);
  const setCurrentDesktop = useDesktopStore((set) => set.setCurrentDesktop);
  const setNumberOfDesktops = useDesktopStore((set) => set.setNumberOfDesktops);
  const setDesktopWidth = useDesktopStore((set) => set.setDesktopWidth);

  return {
    currentDesktop,
    numberOfDesktops,
    desktopWidth,
    setDesktopWidth,
    setCurrentDesktop,
    setNumberOfDesktops,
  };
};
