import React from "react"
import ReactDOM from "react-dom/client"
import { Playground } from "@proControl/Playground"
import { CrashReport } from "@proControl/Application/CrashReport"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CrashReport>
      <Playground />
    </CrashReport>
  </React.StrictMode>
)
