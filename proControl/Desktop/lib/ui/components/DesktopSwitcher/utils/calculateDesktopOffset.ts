interface calculateDesktopOffsetProps {
  desktopWidth: number;
  currentDesktop: number;
}

export const calculateDesktopOffset = ({
  desktopWidth,
  currentDesktop,
}: calculateDesktopOffsetProps) => {
  return desktopWidth * currentDesktop * -1;
};
