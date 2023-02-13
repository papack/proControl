import React from "react";
import { forwardRef } from "react";
import { GridItem } from "../GridItem";
import { GridProps } from "./GridProps";

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  return (
    <GridItem
      {...props}
      ref={ref}
      css={{
        display: "grid",
        alignItems: props.ai,
        grid: props.grd,
        gridArea: props.grdArea,
        gridAutoColumns: props.grdAutoColumns,
        gridAutoFlow: props.grdAutoFlow,
        gridAutoRows: props.grdAutoRows,
        gridColumn: props.grdColumn,
        gridColumnEnd: props.grdColumnEnd,
        gridColumnGap: props.grdColumnGap,
        gridColumnStart: props.grdColumnStart,
        gridGap: props.grdGap || props.g,
        gridRow: props.grdRow,
        gridRowEnd: props.grdRowEnd,
        gridRowGap: props.grdRowGap,
        gridRowStart: props.grdRowStart,
        gridTemplate: props.grdTemplate,
        gridTemplateAreas: props.grdTemplateAreas,
        gridTemplateColumns: props.grdTemplateColumns,
        gridTemplateRows: props.grdTemplateRows,
        ...props.css,
      }}
    >
      {props.children}
    </GridItem>
  );
});
