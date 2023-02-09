//require the fs module
const fs = require("fs")

const name = [
  "Alarms",
  "Analytics",
  "Application",
  "Assemblies",
  "Audittrail",
  "Backup",
  "Batch",
  "Brakes",
  "Dashboard",
  "Debug",
  "Desktop",
  "Dialog",
  "Keyboard",
  "Navigation",
  "Notifications",
  "Playground",
  "PLC",
  "Protocol",
  "Recipes",
  "Resets",
  "Settings",
  "Simulation",
  "Statusbar",
  "Toolbar",
  "User",
  "Widgets"
]

const template = `import { useNavigationState } from "@proControl/Navigation"

export const <%Name%> = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "<%name%>") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}`

name.forEach((n) => {
  const fileName = n + ".tsx"
  const fileContent = template.replace(/<%Name%>/g, n).replace(/<%name%>/g, n.toLowerCase())
  fs.writeFile(`../proControl/${n}/${fileName}`, fileContent, (err) => {
    if (err) throw err
    console.log("The file has been saved!")
  })
})
