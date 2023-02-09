import initAlarms from "../Alarms/init"
import initAnalytics from "../Analytics/init"
import initApplication from "../Application/init"
import initAssemblies from "../Assemblies/init"
import initAudittrail from "../Audittrail/init"
import initBackup from "../Backup/init"
import initBatch from "../Batch/init"
import initBrakes from "../Brakes/init"
import initDashboard from "../Dashboard/init"
import initDebug from "../Debug/init"
import initDesktop from "../Desktop/init"
import initDialog from "../Dialog/init"
import initKeyboard from "../Keyboard/init"
import initNavigation from "../Navigation/init"
import initNotifications from "../Notifications/init"
import initPlayground from "../Playground/init"
import initPLC from "../PLC/init"
import initProtocol from "../Protocol/init"
import initRecipes from "../Recipes/init"
import initResets from "../Resets/init"
import initSettings from "../Settings/init"
import initSimulation from "../Simulation/init"
import initStatusbar from "../Statusbar/init"
import initToolbar from "../Toolbar/init"
import initUser from "../User/init"
import initWidgets from "../Widgets/init"

export const sysInit = () => {
  initAlarms()
  initAnalytics()
  initApplication()
  initAssemblies()
  initAudittrail()
  initBackup()
  initBatch()
  initBrakes()
  initDashboard()
  initDebug()
  initDesktop()
  initDialog()
  initKeyboard()
  initNavigation()
  initNotifications()
  initPlayground()
  initPLC()
  initProtocol()
  initRecipes()
  initResets()
  initSettings()
  initSimulation()
  initStatusbar()
  initToolbar()
  initUser()
  initWidgets()
}
