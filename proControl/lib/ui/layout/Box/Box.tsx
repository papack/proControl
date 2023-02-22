import { forwardRef } from "react"
import { BoxProps } from "./BoxProps"
import { Div } from "../../html/Div"

export const Box = forwardRef<HTMLDivElement, BoxProps>((props: any, ref) => {
  //filter not dom relevant props to prevent warning msgs
  const {
    flxDirection,
    flxShrink,
    grdRow,
    grdColumn,
    grdTemplateRows,
    grdTemplateColumns,
    minH,
    minW,
    ...divProps
  } = props

  return (
    <Div
      //all props eg. onClick etc
      {...divProps}
      //forward ref
      ref={ref}
      //styles
      css={{
        //component props
        color: props.c,
        fontWeight: props.fw,
        fontSize: props.fs,
        marginBottom: props.mb || props.my || props.m,
        marginLeft: props.ml || props.mx || props.m,
        marginRight: props.mr || props.mx || props.m,
        marginTop: props.mt || props.my || props.m,
        paddingBottom: props.pb || props.py || props.p,
        paddingLeft: props.pl || props.px || props.p,
        paddingRight: props.pr || props.px || props.p,
        paddingTop: props.pt || props.py || props.p,
        background: props.bg,
        borderTop: props.bt || props.by || props.b,
        borderRight: props.br || props.bx || props.b,
        borderBottom: props.bb || props.by || props.b,
        borderLeft: props.bl || props.bx || props.b,
        borderTopRightRadius: props.rtr || props.rt || props.rr || props.r,
        borderTopLeftRadius: props.rtl || props.rt || props.rl || props.r,
        borderBottomRightRadius: props.rbr || props.rb || props.rr || props.r,
        borderBottomLeftRadius: props.rbl || props.rb || props.rl || props.r,
        height: props.s || props.h,
        maxHeight: props.maxH,
        maxWidth: props.maxW,
        minHeight: props.minH,
        minWidth: props.minW,
        width: props.s || props.w,
        boxShadow: props.shadow,

        //all css props (overrides component props)
        ...props.css
      }}
    />
  )
})
