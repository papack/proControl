import { PanelSize } from "../types";

export const detectPanelSize = (): PanelSize => {
  //get screen width
  const width = window.innerWidth;

  //if less than 1300px than we are on the "old" panel
  if (width < 1300) {
    return "normal";
  }

  //otherwise we are on the "new" panel
  return "wide";
};
