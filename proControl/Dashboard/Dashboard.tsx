import { useState } from "react"
import { Box, Stack } from "@proControl/lib/ui/layout"
import { Button } from "@proControl/lib/ui/components"
import { SinglePageTemplate } from "@proControl/lib/templates"
import { useNavigationState } from "@proControl/Navigation"
import { useDashboardCommands } from "./useDashboardCommands"
import { useDashboardRequest } from "./useDashboardRequest"
import { useDashboardState } from "./useDashboardState"

export const Dashboard = () => {
  //hooks
  const { location } = useNavigationState()
  const { items, setItems } = useDashboardState()
  const { requestPositionInfo } = useDashboardRequest()
  const { addDashboardItem } = useDashboardCommands()

  //state
  const [id, setId] = useState<string>("")
  const [xPos, setXPos] = useState<number>(1)
  const [yPos, setYPos] = useState<number>(1)
  const [h, setH] = useState<number>(1)
  const [w, setW] = useState<number>(1)

  if (location !== "dashboard") return null

  return (
    <SinglePageTemplate panelSize="normal" title="Dashboard">
      <Stack g="$md">
        <div>
          id
          <input
            value={id}
            onChange={(e) => {
              setId(e.target.value)
            }}
          />
        </div>
        <div>
          xPos
          <input
            value={xPos}
            type="number"
            onChange={(e) => {
              setXPos(Number(e.target.value))
            }}
          />
        </div>
        <div>
          yPos
          <input
            value={yPos}
            type="number"
            onChange={(e) => {
              setYPos(Number(e.target.value))
            }}
          />
        </div>
        <div>
          w
          <input
            value={w}
            type="number"
            onChange={(e) => {
              setW(Number(e.target.value))
            }}
          />
        </div>
        <div>
          h
          <input
            value={h}
            type="number"
            onChange={(e) => {
              setH(Number(e.target.value))
            }}
          />
        </div>
        <Button
          panelSize="normal"
          title="add"
          onClick={() => {
            addDashboardItem({
              id,
              xPos,
              yPos,
              width: w,
              height: h
            })
          }}
        ></Button>
        <Button
          panelSize="normal"
          title="clear"
          onClick={() => {
            setItems([])
          }}
        ></Button>
        <Button
          panelSize="normal"
          title="request position"
          onClick={() => {
            console.log(requestPositionInfo(xPos, yPos))
          }}
        ></Button>
      </Stack>
      <Stack>
        {items.map((item) => (
          <Box key={item.id} h="100%">
            id: {item.id}, xPos: {item.xPos}, yPos: {item.yPos}, width: {item.width}, height:{" "}
            {item.height}
          </Box>
        ))}
      </Stack>
    </SinglePageTemplate>
  )
}
