import { useState, useEffect } from "react";
import { PanelSize } from "./types";
import { detectPanelSize } from "./functions";

export const usePanelSize = () => {
  const [panelSize, setPanelSize] = useState<PanelSize>(detectPanelSize());
  const [panelWidthInPixel, setPanelWidthInPixel] = useState<number>(
    window.innerWidth
  );
  const [panelHeightInPixel, setPanelHeightInPixel] = useState<number>(
    window.innerHeight
  );

  useEffect(() => {
    //handler for the window resize event
    const handleResize = () => {
      //set the panel size
      setPanelSize(detectPanelSize());
      setPanelHeightInPixel(window.innerHeight);
      setPanelWidthInPixel(window.innerWidth);
    };

    //add a listener to the window resize event
    window.addEventListener("resize", handleResize);

    //return a function to remove the listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //return the panel size
  return { panelSize, panelHeightInPixel, panelWidthInPixel };
};
