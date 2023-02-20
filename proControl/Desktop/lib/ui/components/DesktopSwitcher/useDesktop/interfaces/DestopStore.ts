export interface DesktopStore {
  currentDesktop: number;
  numberOfDesktops: number;
  desktopWidth: number;
  setCurrentDesktop: (currentDesktop: number) => void;
  setNumberOfDesktops: (numberOfDesktops: number) => void;
  setDesktopWidth: (desktopWidth: number) => void;
}
