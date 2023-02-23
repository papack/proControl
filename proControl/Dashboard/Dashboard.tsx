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
import { useDashboardCommands } from "./useDashboardCommands"

import { WidgetType } from "@proControl/Widgets/types"

interface SelectBoxProps {
  id: WidgetType
  xPos: number
  yPos: number
  children: React.ReactNode
  mode: "wide" | "normal"
  onSelect: (id: string, xPos: number, yPos: number) => void
}

const SelectBox = ({
  id,
  mode = "wide",
  children = null,
  onSelect = () => {},
  xPos = 0,
  yPos = 0
}: SelectBoxProps) => {
  //hooks
  const { addDashboardItem } = useDashboardCommands()

  return (
    <Relative
      h="300px"
      w={mode === "normal" ? "300px" : "500px"}
      onClick={() => {
        onSelect(id, xPos, yPos)

        addDashboardItem({
          id,
          xPos,
          yPos,
          width: mode === "normal" ? 1 : 2,
          height: 1
        })
      }}
    >
      <Absolute top={0} right={0} bottom={0} left={0}>
        {children}
      </Absolute>
      <Absolute top={0} right={0} bottom={0} left={0}></Absolute>
    </Relative>
  )
}

export const Dashboard = ({}: DashboardProps) => {
  //hooks
  const { location } = useNavigationState()
  const { panelSize } = usePanelSize()

  //states
  const [show, setShow] = useState<boolean>(false)
  const [xPos, setXPos] = useState<number>(0)
  const [yPos, setYPos] = useState<number>(0)

  //callbacks
  const onSelectHandler = (id: string, xPos: number, yPos: number) => {
    console.log("select: ", id, xPos, yPos)
    setShow(false)
  }

  if (location !== "dashboard") return null

  return (
    <SinglePageTemplate title="Dashboard" panelSize={panelSize}>
      <Grid g="$md" grdTemplateColumns="repeat(4, 1fr)" grdTemplateRows="repeat(2,1fr)" h="100%">
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              setXPos(1)
              setYPos(1)
            }}
          >
            <Box s="64px" b="1px solid $christ" p="16px" r="999px">
              <Icon name="hinzufuegen" color="$christ" />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              setXPos(2)
              setYPos(1)
            }}
          >
            <Box s="64px" b="1px solid $christ" p="16px" r="999px">
              <Icon name="hinzufuegen" color="$christ" />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              setXPos(3)
              setYPos(1)
            }}
          >
            <Box s="64px" b="1px solid $christ" p="16px" r="999px">
              <Icon name="hinzufuegen" color="$christ" />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              setXPos(4)
              setYPos(1)
            }}
          >
            <Box s="64px" b="1px solid $christ" p="16px" r="999px">
              <Icon name="hinzufuegen" color="$christ" />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              setXPos(1)
              setYPos(2)
            }}
          >
            <Box s="64px" b="1px solid $christ" p="16px" r="999px">
              <Icon name="hinzufuegen" color="$christ" />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              setXPos(2)
              setYPos(2)
            }}
          >
            <Box s="64px" b="1px solid $christ" p="16px" r="999px">
              <Icon name="hinzufuegen" color="$christ" />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              setXPos(3)
              setYPos(2)
            }}
          >
            <Box s="64px" b="1px solid $christ" p="16px" r="999px">
              <Icon name="hinzufuegen" color="$christ" />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              setXPos(4)
              setYPos(2)
            }}
          >
            <Box s="64px" b="1px solid $christ" p="16px" r="999px">
              <Icon name="hinzufuegen" color="$christ" />
            </Box>
          </Center>
        </GridItem>
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
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <AnalogClock />
                </SelectBox>
                <SelectBox
                  id="Batch"
                  mode="normal"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Batch />
                </SelectBox>
                <SelectBox
                  id="Current"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Current />
                </SelectBox>
                <SelectBox
                  id="Custom"
                  mode="normal"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Custom />
                </SelectBox>
                <SelectBox
                  id="Cycles"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Cycles />
                </SelectBox>
                <SelectBox
                  id="DigitalClock"
                  mode="normal"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <DigitalClock />
                </SelectBox>
                <SelectBox
                  id="Distribution"
                  mode="normal"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Distribution />
                </SelectBox>
                <SelectBox
                  id="Failures"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Failures />
                </SelectBox>
                <SelectBox
                  id="History"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <History />
                </SelectBox>
                <SelectBox
                  id="MachineState"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <MachineState />
                </SelectBox>
                <SelectBox
                  id="Maintenance"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Maintenance />
                </SelectBox>
                <SelectBox
                  id="Material"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Material />
                </SelectBox>
                <SelectBox
                  id="Output"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Output />
                </SelectBox>
                <SelectBox
                  id="Progress"
                  mode="normal"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Progress />
                </SelectBox>
                <SelectBox
                  id="Speed"
                  mode="normal"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <Speed />
                </SelectBox>
                <SelectBox
                  id="SpeedWithTarget"
                  mode="normal"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
                >
                  <SpeedWithTarget />
                </SelectBox>
                <SelectBox
                  id="Stats"
                  mode="wide"
                  onSelect={onSelectHandler}
                  xPos={xPos}
                  yPos={yPos}
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
