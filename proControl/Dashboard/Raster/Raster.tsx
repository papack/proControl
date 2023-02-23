import { useState } from "react"
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
import { Modal } from "@proControl/lib/ui/components"
import { Icon } from "@proControl/lib/ui/components/Icon"
import { RasterProps } from "./types"
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

interface SelectBoxProps {
  id: string
  children: React.ReactNode
  mode: "wide" | "normal"
  onSelect: (id: string) => void
}

const SelectBox = ({
  id = "",
  mode = "wide",
  children = null,
  onSelect = () => {}
}: SelectBoxProps) => {
  return (
    <Relative
      h="300px"
      w={mode === "normal" ? "300px" : "500px"}
      onClick={() => {
        onSelect(id)
      }}
    >
      <Absolute top={0} right={0} bottom={0} left={0}>
        {children}
      </Absolute>
      <Absolute top={0} right={0} bottom={0} left={0}></Absolute>
    </Relative>
  )
}

export const Raster = ({}: RasterProps) => {
  //states
  const [show, setShow] = useState<boolean>(false)

  //callbacks
  const onSelectHandler = (id: string) => {
    console.log("select: ", id)
    setShow(false)
  }

  return (
    <>
      <Grid g="$md" grdTemplateColumns="repeat(4, 1fr)" grdTemplateRows="repeat(2,1fr)" h="100%">
        <GridItem>
          <Center
            h="100%"
            b="1px dashed gray"
            onClick={() => {
              setShow(true)
              console.log(`add to ${1},${1}`)
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
              console.log(`add to ${2},${1}`)
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
              console.log(`add to ${3},${1}`)
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
              console.log(`add to ${4},${1}`)
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
              console.log(`add to ${1},${2}`)
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
              console.log(`add to ${2},${2}`)
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
              console.log(`add to ${3},${2}`)
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
              console.log(`add to ${4},${2}`)
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
                <SelectBox id="analog-clock" mode="normal" onSelect={onSelectHandler}>
                  <AnalogClock />
                </SelectBox>
                <SelectBox id="batch" mode="normal" onSelect={onSelectHandler}>
                  <Batch />
                </SelectBox>
                <SelectBox id="current" mode="wide" onSelect={onSelectHandler}>
                  <Current />
                </SelectBox>
                <SelectBox id="custom" mode="normal" onSelect={onSelectHandler}>
                  <Custom />
                </SelectBox>
                <SelectBox id="cycles" mode="wide" onSelect={onSelectHandler}>
                  <Cycles />
                </SelectBox>
                <SelectBox id="digital-clock" mode="normal" onSelect={onSelectHandler}>
                  <DigitalClock />
                </SelectBox>
                <SelectBox id="distribution" mode="normal" onSelect={onSelectHandler}>
                  <Distribution />
                </SelectBox>
                <SelectBox id="failures" mode="wide" onSelect={onSelectHandler}>
                  <Failures />
                </SelectBox>
                <SelectBox id="history" mode="wide" onSelect={onSelectHandler}>
                  <History />
                </SelectBox>
                <SelectBox id="machine-state" mode="wide" onSelect={onSelectHandler}>
                  <MachineState />
                </SelectBox>
                <SelectBox id="maintenance" mode="wide" onSelect={onSelectHandler}>
                  <Maintenance />
                </SelectBox>
                <SelectBox id="material" mode="wide" onSelect={onSelectHandler}>
                  <Material />
                </SelectBox>
                <SelectBox id="output" mode="wide" onSelect={onSelectHandler}>
                  <Output />
                </SelectBox>
                <SelectBox id="progress" mode="normal" onSelect={onSelectHandler}>
                  <Progress />
                </SelectBox>
                <SelectBox id="speed" mode="normal" onSelect={onSelectHandler}>
                  <Speed />
                </SelectBox>
                <SelectBox id="speed-with-target" mode="normal" onSelect={onSelectHandler}>
                  <SpeedWithTarget />
                </SelectBox>
                <SelectBox id="stats" mode="wide" onSelect={onSelectHandler}>
                  <Stats />
                </SelectBox>
              </Wrap>
            </Box>
          </Scroll>
        </Box>
      </Modal>
    </>
  )
}
