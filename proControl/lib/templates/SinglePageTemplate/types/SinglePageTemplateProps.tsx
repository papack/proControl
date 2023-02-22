import { PanelSize } from "@proControl/lib/hooks/usePanelSize/types"

export interface SinglePageTemplateProps {
  /** children */
  children: React.ReactNode

  /** title of the App/Page */
  title: string

  /** PanelSize */
  panelSize: PanelSize

  /** onClose handler */
  onClose?: () => void
}
