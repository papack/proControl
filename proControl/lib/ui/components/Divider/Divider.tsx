import { DividerProps } from "./interfaces";
import { DividerStyled } from "./styled";

export const Divider = ({ direction = "row", size = "100%" }: DividerProps) => {
  return (
    <DividerStyled
      data-testid="divider"
      direction={direction}
      style={direction === "row" ? { width: size } : { height: size }}
    />
  );
};
