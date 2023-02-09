import React from "react"
import ReactDOM from "react-dom/client"
import { CrashReport } from "@proControl/Application/CrashReport"
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CrashReport>
      <Statusbar />
      <Toolbar />
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
      <Notifications />
      <Dialog />
      <Keyboard />
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
    </CrashReport>
  </React.StrictMode>
)
