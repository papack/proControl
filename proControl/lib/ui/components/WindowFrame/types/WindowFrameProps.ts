export interface WindowFrameProps {
  /*+ the title of the Window Frame */
  title: string

  /**  the children React Node */
  children: React.ReactNode

  /** on close handler */
  onClose: () => void

  /** Background */
  bg?: string
}
