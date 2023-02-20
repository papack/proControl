import { useState, useCallback } from "react";

//this forces react to rerender

export const useForceUpdate = () => {
  //force update
  const [, updateState] = useState<object>();
  const forceUpdate = useCallback(() => {
    //setTimeout(0) -> this ist a hack to put the update on the "Queue"
    setTimeout(() => {
      updateState({});
    }, 0);
  }, []);

  return { forceUpdate };
};
