interface onDragEndHandlerProps {
  moveToDesktop: (desktop: number, desktopWidth: number) => void;
  xOffset: number;
  desktopWidth: number;
  currentDesktop: number;
  setCurrentDesktop: (desktop: number) => void;
  numberOfDesktops: number;
}

const CHANGE_DESKTOP_LIMIT_IN_PERCENT = 0.2;

export const onDragEndHandler = ({
  moveToDesktop,
  desktopWidth,
  currentDesktop,
  setCurrentDesktop,
  numberOfDesktops,
  xOffset,
}: onDragEndHandlerProps) => {
  let newDesktop = currentDesktop;

  //check if the user moved the desktop to the right
  if (
    xOffset < desktopWidth * CHANGE_DESKTOP_LIMIT_IN_PERCENT * -1 &&
    currentDesktop < numberOfDesktops - 1 //check if we already are on the last desktop
  ) {
    newDesktop = currentDesktop + 1;
  }

  //check if the user moved the desktop to the right
  if (
    xOffset > desktopWidth * CHANGE_DESKTOP_LIMIT_IN_PERCENT &&
    currentDesktop > 0 // check if we already are on the first desktop
  ) {
    newDesktop = currentDesktop - 1;
  }

  //set the new position if the desktop changed
  if (currentDesktop !== newDesktop) {
    setCurrentDesktop(newDesktop);
  }

  //if not moved, reset xPos back to origin
  if (currentDesktop === newDesktop) {
    moveToDesktop(currentDesktop, desktopWidth);
  }
};
