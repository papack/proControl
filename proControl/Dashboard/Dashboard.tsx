import { useState } from "react"
import { useNavigationState } from "@proControl/Navigation"
import {
  Wrap,
  Grid,
  GridItem,
  Box,
  Center,
  Blur,
  Scroll,
  Absolute,
  Relative
} from "@proControl/lib/ui/layout"
import { SinglePageTemplate } from "@proControl/lib/templates"
import { usePanelSize } from "@proControl/lib/hooks"

import { Modal } from "@proControl/lib/ui/components"
import { Icon } from "@proControl/lib/ui/components/Icon"
import { AnalogClock } from "@proControl/Widgets/AnalogClock"
import { Batch } from "@proControl/Widgets/Batch"
import { Current } from "@proControl/Widgets/Current"
import { Custom } from "@proControl/Widgets/Custom"
import { Cycles } from "@proControl/Widgets/Cycles"
import { DigitalClock } from "@proControl/Widgets/DigitalClock"
import { Distribution } from "@proControl/Widgets/Distribution"
import { Failures } from "@proControl/Widgets/Failures"
import { History } from "@proControl/Widgets/History"
import { MachineState } from "@proControl/Widgets/MachineState"
import { Maintenance } from "@proControl/Widgets/Maintenance"
import { Material } from "@proControl/Widgets/Material"
import { Output } from "@proControl/Widgets/Output"
import { Progress } from "@proControl/Widgets/Progress"
import { Speed } from "@proControl/Widgets/Speed"
import { SpeedWithTarget } from "@proControl/Widgets/SpeedWithTarget"
import { Stats } from "@proControl/Widgets/Stats"

import { DashboardProps } from "./types"
import { WidgetType } from "@proControl/Widgets/types"
import { useDashboardRequest } from "./useDashboardRequest"
import { useDashboardCommands } from "./useDashboardCommands"

interface SelectBoxProps {
  id: WidgetType
  xPos: number
  yPos: number
  children: React.ReactNode
  mode: "wide" | "normal"
  onSelect: () => void
}

const SelectBox = ({
  id,
  mode = "wide",
  children = null,
  xPos = 0,
  yPos = 0,
  onSelect = () => {}
}: SelectBoxProps) => {
  //hooks
  const { addDashboardItem } = useDashboardCommands()

  return (
    <Relative
      h="300px"
      w={mode === "normal" ? "300px" : "500px"}
      onClick={() => {
        addDashboardItem({
          id: String(Math.round(Math.random() * 1_000_000_000)),
          widgetId: id,
          xPos,
          yPos,
          width: mode === "normal" ? 1 : 2,
          height: 1
        })
        onSelect()
      }}
    >
      <Absolute top={0} right={0} bottom={0} left={0}>
        {children}
      </Absolute>
      <Absolute top={0} right={0} bottom={0} left={0}>
        {/** Prevent klicks */}
      </Absolute>
    </Relative>
  )
}

export const Dashboard = ({}: DashboardProps) => {
  //hooks
  const { location } = useNavigationState()
  const { panelSize } = usePanelSize()

  //request
  const { requestPositionInfo } = useDashboardRequest()

  //commands
  const { removeDashboardItem } = useDashboardCommands()

  //states
  const [show, setShow] = useState<boolean>(false)
  const [xPos, setXPos] = useState<number>(0)
  const [yPos, setYPos] = useState<number>(0)

  if (location !== "dashboard") return null

  return (
    <SinglePageTemplate title="Dashboard" panelSize={panelSize}>
      <Grid g="$md" grdTemplateColumns="repeat(4, 1fr)" grdTemplateRows="repeat(2,1fr)" h="100%">
        {[...Array(2)].map((_, i) => {
          return [...Array(4)].map((_, j) => {
            const posInfo = requestPositionInfo(j + 1, i + 1)

            return (
              <GridItem
                key={`${j}-${i}`}
                grdColumn={
                  posInfo !== null
                    ? `${posInfo!.xPos}/${posInfo!.xPos + posInfo!.width}`
                    : undefined
                }
                grdRow={
                  posInfo !== null
                    ? `${posInfo!.yPos}/${posInfo!.yPos + posInfo!.height}`
                    : undefined
                }
              >
                {posInfo === null ? (
                  //ADD
                  <Center
                    h="100%"
                    b="1px dashed gray"
                    onClick={() => {
                      setXPos(j + 1)
                      setYPos(i + 1)
                      setShow(true)
                    }}
                  >
                    <Box s="64px" b="1px solid $christ" p="16px" r="999px">
                      <Icon name="hinzufuegen" color="$christ" />
                    </Box>
                  </Center>
                ) : (
                  //REMOVE
                  <Relative
                    s="100%"
                    onClick={() => {
                      removeDashboardItem(posInfo)
                    }}
                  >
                    <Absolute top={0} right={0} bottom={0} left={0}>
                      {posInfo.widgetId === "AnalogClock" && <AnalogClock />}
                      {posInfo.widgetId === "Batch" && <Batch />}
                      {posInfo.widgetId === "Current" && <Current />}
                      {posInfo.widgetId === "Custom" && <Custom />}
                      {posInfo.widgetId === "Cycles" && <Cycles />}
                      {posInfo.widgetId === "DigitalClock" && <DigitalClock />}
                      {posInfo.widgetId === "Distribution" && <Distribution />}
                      {posInfo.widgetId === "Failures" && <Failures />}
                      {posInfo.widgetId === "History" && <History />}
                      {posInfo.widgetId === "MachineState" && <MachineState />}
                      {posInfo.widgetId === "Maintenance" && <Maintenance />}
                      {posInfo.widgetId === "Material" && <Material />}
                      {posInfo.widgetId === "Output" && <Output />}
                      {posInfo.widgetId === "Progress" && <Progress />}
                      {posInfo.widgetId === "Speed" && <Speed />}
                      {posInfo.widgetId === "SpeedWithTarget" && <SpeedWithTarget />}
                      {posInfo.widgetId === "Stats" && <Stats />}
                    </Absolute>
                    <Absolute
                      top={0}
                      right={0}
                      bottom={0}
                      left={0}
                      r="$md"
                      bg="rgba(0,0,0,0.3)"
                      css={{ backdropFilter: "blur(1px)" }}
                    >
                      <Center h="100%">
                        <Box s="64px" b="2px solid $failure" p="16px" r="999px" bg="white">
                          <Icon name="loeschen" color="$failure" />
                        </Box>
                      </Center>
                    </Absolute>
                  </Relative>
                )}
              </GridItem>
            )
          })
        })}
      </Grid>
      <Blur show={show} />
      <Modal
        show={show}
        title="Widget hinzufügen"
        onClose={() => {
          setShow(false)
        }}
      >
        <Box w="85vw" h="75vh">
          <Scroll>
            <Box>
              <Wrap g="$md" jc="center" ai="center">
                <SelectBox
                  id="AnalogClock"
                  mode="normal"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <AnalogClock />
                </SelectBox>
                <SelectBox
                  id="Batch"
                  mode="normal"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Batch />
                </SelectBox>
                <SelectBox
                  id="Current"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Current />
                </SelectBox>
                <SelectBox
                  id="Custom"
                  mode="normal"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Custom />
                </SelectBox>
                <SelectBox
                  id="Cycles"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Cycles />
                </SelectBox>
                <SelectBox
                  id="DigitalClock"
                  mode="normal"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <DigitalClock />
                </SelectBox>
                <SelectBox
                  id="Distribution"
                  mode="normal"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Distribution />
                </SelectBox>
                <SelectBox
                  id="Failures"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Failures />
                </SelectBox>
                <SelectBox
                  id="History"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <History />
                </SelectBox>
                <SelectBox
                  id="MachineState"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <MachineState />
                </SelectBox>
                <SelectBox
                  id="Maintenance"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Maintenance />
                </SelectBox>
                <SelectBox
                  id="Material"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Material />
                </SelectBox>
                <SelectBox
                  id="Output"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Output />
                </SelectBox>
                <SelectBox
                  id="Progress"
                  mode="normal"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Progress />
                </SelectBox>
                <SelectBox
                  id="Speed"
                  mode="normal"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Speed />
                </SelectBox>
                <SelectBox
                  id="SpeedWithTarget"
                  mode="normal"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <SpeedWithTarget />
                </SelectBox>
                <SelectBox
                  id="Stats"
                  mode="wide"
                  xPos={xPos}
                  yPos={yPos}
                  onSelect={() => {
                    setShow(false)
                  }}
                >
                  <Stats />
                </SelectBox>
              </Wrap>
            </Box>
          </Scroll>
        </Box>
      </Modal>
    </SinglePageTemplate>
  )
}
