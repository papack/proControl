import React from "react"
import ReactDOM from "react-dom/client"

import { Box, Grid, Center, Relative } from "@proControl/lib/ui/layout"

import { globalStyles } from "@proControl/lib/ui/style"

import { Alarms } from "@proControl/Alarms"
import { Analytics } from "@proControl/Analytics"
import { Application } from "@proControl/Application"
import { Modules } from "@proControl/Modules"
import { Audittrail } from "@proControl/Audittrail"
import { Backup } from "@proControl/Backup"
import { Batch } from "@proControl/Batch"
import { Brakes } from "@proControl/Brakes"
import { Dashboard } from "@proControl/Dashboard"
import { Debug } from "@proControl/Debug"
import { Desktop } from "@proControl/Desktop"
import { Dialog } from "@proControl/Dialog"
import { Keyboard } from "@proControl/Keyboard"
import { Navigation } from "@proControl/Navigation"
import { Notifications } from "@proControl/Notifications"
import { Playground } from "@proControl/Playground"
import { PLC } from "@proControl/PLC"
import { Protocol } from "@proControl/Protocol"
import { Recipes } from "@proControl/Recipes"
import { Resets } from "@proControl/Resets"
import { Settings } from "@proControl/Settings"
import { Simulation } from "@proControl/Simulation"
import { Statusbar } from "@proControl/Statusbar"
import { Toolbar } from "@proControl/Toolbar"
import { User } from "@proControl/User"
import { Widgets } from "@proControl/Widgets"

const ProControl = () => {
  globalStyles()

  return (
    <Relative h="100vh" w="100vw">
      <Grid s="100%" grdTemplateRows="auto 1fr">
        {/**Statusbar */}
        <Statusbar />

        {/** Toolbar */}
        <Grid s="100%" grdTemplateColumns="auto 1fr">
          <Center s="100%" px="$lg" pb="$lg">
            <Toolbar />
          </Center>

          {/**Content */}
          <Box s="100%">
            <Alarms />
            <Analytics />
            <Application />
            <Modules />
            <Audittrail />
            <Backup />
            <Batch />
            <Brakes />
            <Debug />
            <Desktop />
            <Dashboard />
            <Dialog />
            <Navigation />
            <Playground />
            <PLC />
            <Protocol />
            <Recipes />
            <Resets />
            <Settings />
            <Simulation />
            <User />
            <Widgets />
          </Box>
        </Grid>
      </Grid>

      {/** Overlays */}
      <Keyboard />
      <Notifications />
    </Relative>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProControl />
  </React.StrictMode>
)
